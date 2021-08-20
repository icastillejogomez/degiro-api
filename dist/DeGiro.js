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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeGiro = void 0;
// Import modules
var async = __importStar(require("async"));
// Import requests
var api_1 = require("./api");
/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
var DeGiro = /** @class */ (function () {
    /* Constructor and generator function */
    function DeGiro(params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this.hasSessionId = function () { return !!_this.accountConfig && !!_this.accountConfig.data && !!_this.accountConfig.data.sessionId; };
        this.getJSESSIONID = function () { return _this.hasSessionId() ? _this.accountConfig.data.sessionId : undefined; };
        var username = params.username, pwd = params.pwd, oneTimePassword = params.oneTimePassword, jsessionId = params.jsessionId;
        username = username || process.env['DEGIRO_USER'];
        pwd = pwd || process.env['DEGIRO_PWD'];
        oneTimePassword = oneTimePassword || process.env['DEGIRO_OTP'];
        jsessionId = jsessionId || process.env['DEGIRO_JSESSIONID'];
        if (!username)
            throw new Error('DeGiro api needs an username to access');
        if (!pwd)
            throw new Error('DeGiro api needs an password to access');
        this.username = username;
        this.pwd = pwd;
        this.oneTimePassword = oneTimePassword;
        this.jsessionId = jsessionId;
    }
    DeGiro.create = function (params) {
        return new DeGiro(params);
    };
    /* Session methods */
    DeGiro.prototype.login = function () {
        var _this = this;
        if (this.jsessionId)
            return this.loginWithJSESSIONID(this.jsessionId);
        return new Promise(function (resolve, reject) {
            api_1.loginRequest({
                username: _this.username,
                pwd: _this.pwd,
                oneTimePassword: _this.oneTimePassword,
            })
                .then(function (loginResponse) {
                if (!loginResponse.sessionId)
                    reject('Login response have not a sessionId field');
                else
                    return _this.getAccountConfig(loginResponse.sessionId);
            })
                .then(function () { return _this.getAccountData(); })
                .then(resolve)
                .catch(reject);
        });
    };
    DeGiro.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.accountData || !_this.accountConfig) {
                return reject('You must log in first');
            }
            api_1.logoutRequest(_this.accountData, _this.accountConfig)
                .then(function () {
                delete _this.accountData;
                delete _this.accountConfig;
                resolve();
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.isLogin = function (options) {
        var _this = this;
        if (!options || !options.secure)
            return this.hasSessionId() && !!this.accountData;
        return new Promise(function (resolve) {
            _this.getAccountConfig()
                .then(function () { return resolve(true); })
                .catch(function () { return resolve(false); });
        });
    };
    DeGiro.prototype.loginWithJSESSIONID = function (jsessionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAccountConfig(jsessionId)
                .then(function () { return _this.getAccountData(); })
                .then(function (accountData) {
                _this.jsessionId = undefined; // Remove the jsessionId to prevent reuse
                resolve(accountData);
            })
                .catch(reject);
        });
    };
    /* Account methods */
    DeGiro.prototype.getAccountConfig = function (sessionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!sessionId && !_this.hasSessionId()) {
                return reject('You must log in first or provide a JSESSIONID');
            }
            api_1.getAccountConfigRequest(sessionId || _this.accountConfig.data.sessionId)
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
            if (!_this.hasSessionId()) {
                return reject('You must log in first');
            }
            api_1.getAccountDataRequest(_this.accountConfig)
                .then(function (accountData) {
                _this.accountData = accountData;
                resolve(accountData);
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.getAccountState = function (options) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getAccountStateRequest(this.accountData, this.accountConfig, options);
    };
    DeGiro.prototype.getAccountReports = function () {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getAccountReportsRequest(this.accountData, this.accountConfig);
    };
    DeGiro.prototype.getAccountInfo = function () {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getAccountInfoRequest(this.accountData, this.accountConfig);
    };
    /* Search methods */
    DeGiro.prototype.searchProduct = function (options) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.searchProductRequest(options, this.accountData, this.accountConfig);
    };
    /* Cash Funds methods */
    DeGiro.prototype.getCashFunds = function () {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getCashFundstRequest(this.accountData, this.accountConfig);
    };
    /* Porfolio methods */
    DeGiro.prototype.getPortfolio = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.hasSessionId()) {
                return reject('You must log in first');
            }
            api_1.getPortfolioRequest(_this.accountData, _this.accountConfig, config)
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
    /* Stocks methods */
    DeGiro.prototype.getFavouriteProducts = function () {
        return new Promise(function (resolve, reject) {
            reject('Method not implemented');
        });
    };
    DeGiro.prototype.getPopularStocks = function (config) {
        if (config === void 0) { config = {}; }
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getPopularStocksRequest(this.accountData, this.accountConfig, config);
    };
    /* Orders methods */
    DeGiro.prototype.getOrders = function (config) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getOrdersRequest(this.accountData, this.accountConfig, config);
    };
    DeGiro.prototype.getHistoricalOrders = function (options) {
        return new Promise(function (resolve, reject) {
            reject('Method not implemented');
        });
    };
    DeGiro.prototype.createOrder = function (order) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.createOrderRequest(order, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.executeOrder = function (order, executeId) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.executeOrderRequest(order, executeId, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.deleteOrder = function (orderId) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.deleteOrderRequest(orderId, this.accountData, this.accountConfig);
    };
    /* Miscellaneous methods */
    DeGiro.prototype.getProductsByIds = function (ids) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getProductsByIdsRequest(ids, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.getNews = function (options) {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getNewsRequest(options, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.getWebi18nMessages = function (lang) {
        if (lang === void 0) { lang = 'es_ES'; }
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getWebi18nMessagesRequest(lang, this.accountData, this.accountConfig);
    };
    DeGiro.prototype.getWebSettings = function () {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getWebSettingsRequest(this.accountData, this.accountConfig);
    };
    DeGiro.prototype.getWebUserSettings = function () {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getWebUserSettingsRequest(this.accountData, this.accountConfig);
    };
    DeGiro.prototype.getConfigDictionary = function () {
        if (!this.hasSessionId()) {
            return Promise.reject('You must log in first');
        }
        return api_1.getConfigDictionaryRequest(this.accountData, this.accountConfig);
    };
    return DeGiro;
}());
exports.DeGiro = DeGiro;
//# sourceMappingURL=DeGiro.js.map