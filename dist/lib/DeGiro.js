"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeGiro = void 0;
// Import requests
var requests_1 = require("./requests");
/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
var DeGiro = /** @class */ (function () {
    function DeGiro(params) {
        var username = params.username, pwd = params.pwd;
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
    DeGiro.prototype.getAccountConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.loginResponse || !_this.loginResponse.sessionId) {
                return reject('No session id found.');
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
                return reject('No session id found.');
            }
            requests_1.getAccountDataRequest(_this.loginResponse.sessionId, _this.accountConfig)
                .then(function (accountData) {
                _this.accountData = accountData;
                resolve(accountData);
            })
                .catch(reject);
        });
    };
    DeGiro.prototype.hasLogin = function () {
        return this.loginResponse !== undefined;
    };
    DeGiro.prototype.getCashFunds = function () {
        throw new Error('Method not implemented.');
    };
    DeGiro.prototype.getPortfolio = function () {
        throw new Error('Method not implemented.');
    };
    DeGiro.prototype.printConfig = function () {
        console.log({
            username: this.username,
            pwd: this.pwd,
        });
    };
    return DeGiro;
}());
exports.DeGiro = DeGiro;
//# sourceMappingURL=DeGiro.js.map