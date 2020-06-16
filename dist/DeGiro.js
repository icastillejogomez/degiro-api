"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeGiro = void 0;
// Import modules
var async = __importStar(require("async"));
// Import requests
var requests_1 = require("./requests");
/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
var DeGiro = /** @class */ (function () {
    function DeGiro(params) {
        if (params === void 0) { params = {}; }
        var username = params.username, pwd = params.pwd;
        username = username || process.env['DEGIRO_USER'];
        pwd = pwd || process.env['DEGIRO_PWD'];
        if (!username)
            throw new Error('DeGiro api needs an username to access');
        if (!pwd)
            throw new Error('DeGiro api needs an password to access');
        this.username = username;
        this.pwd = pwd;
    }
    DeGiro.create = function (params) {
        return new DeGiro(params);
    };
    DeGiro.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            requests_1.loginRequest({ username: _this.username, pwd: _this.pwd })
                .then(function (loginResponse) {
                _this.loginResponse = loginResponse;
                return _this.getAccountConfig();
            })
                .then(function () { return _this.getAccountData(); })
                .then(function (accountData) {
                resolve();
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.accountData || !_this.accountConfig) {
                return reject('You must log in first');
            }
            requests_1.logoutRequest(_this.accountData, _this.accountConfig)
                .then(function () {
                delete _this.accountData;
                delete _this.accountConfig;
                delete _this.loginResponse;
                resolve();
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.getAccountConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.loginResponse || !_this.loginResponse.sessionId) {
                return reject('You must log in first');
            }
            requests_1.getAccountConfigRequest(_this.loginResponse.sessionId)
                .then(function (accountConfig) {
                _this.accountConfig = accountConfig;
                resolve(accountConfig);
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.getAccountData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.loginResponse || !_this.loginResponse.sessionId || !_this.accountConfig) {
                return reject('You must log in first');
            }
            requests_1.getAccountDataRequest(_this.loginResponse.sessionId, _this.accountConfig)
                .then(function (accountData) {
                _this.accountData = accountData;
                resolve(accountData);
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.isLogin = function () {
        return this.loginResponse !== undefined && this.accountData !== undefined && this.accountConfig !== undefined;
    };
    DeGiro.prototype.getCashFunds = function () {
        throw new Error('Method not implemented.');
    };
    DeGiro.prototype.getPortfolio = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.loginResponse || !_this.loginResponse.sessionId || !_this.accountData || !_this.accountConfig) {
                return reject('You must log in first');
            }
            requests_1.getPortfolioRequest(_this.loginResponse.sessionId, _this.accountData, _this.accountConfig, config)
                .then(function (portfolio) { return _this.completePortfolioDetails(portfolio, config.getProductDetails || false); })
                .then(resolve)
                .catch(reject);
        });
    };
    DeGiro.prototype.completePortfolioDetails = function (portfolio, getProductDetails) {
        var _this = this;
        if (!getProductDetails)
            return Promise.resolve(portfolio);
        return new Promise(function (resolve, reject) {
            async.map(portfolio, function (position, next) {
                if (position.positionType !== 'PRODUCT')
                    return next(null, position);
                _this.getProductsByIds([(position.id)])
                    .then(function (product) {
                    position.productData = product[position.id];
                    next(null, position);
                })
                    .catch(function (error) { return next(error); });
                // tslint:disable-next-line: align
            }, function (error, portfolio) {
                if (error)
                    return reject(error);
                resolve(portfolio);
            });
        });
    };
    DeGiro.prototype.getProductsByIds = function (ids) {
        if (!this.loginResponse || !this.loginResponse.sessionId || !this.accountConfig || !this.accountData) {
            return Promise.reject('You must log in first');
        }
        return requests_1.getProductsByIdsRequest(ids, this.loginResponse.sessionId, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.searchProduct = function (options) {
        if (!this.accountConfig || !this.accountData) {
            return Promise.reject('You must log in first');
        }
        return requests_1.searchProductRequest(options, this.accountConfig, this.accountData);
    };
    DeGiro.prototype.createOrder = function (order) {
        if (!this.accountConfig || !this.accountData) {
            return Promise.reject('You must log in first');
        }
        return requests_1.createOrderRequest(order, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.executeOrder = function (order, executeId) {
        if (!this.accountConfig || !this.accountData) {
            return Promise.reject('You must log in first');
        }
        return requests_1.executeOrderRequest(order, executeId, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.deleteOrder = function (orderId) {
        if (!this.accountConfig || !this.accountData) {
            return Promise.reject('You must log in first');
        }
        return requests_1.deleteOrderRequest(orderId, this.accountData, this.accountConfig);
    };
    return DeGiro;
}());
exports.DeGiro = DeGiro;
//# sourceMappingURL=DeGiro.js.map