"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRequest = void 0;
// Import modules
var node_fetch_1 = __importDefault(require("node-fetch"));
// Import enums
var enums_1 = require("../enums");
var BASE_API_URL = enums_1.MainDeGiroConsts.BASE_API_URL, LOGOUT_URL_PATH = enums_1.MainDeGiroConsts.LOGOUT_URL_PATH;
// Import debug console log
var utils_1 = require("../utils");
function logoutRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        // Do the request to get a session
        var url = "" + BASE_API_URL + LOGOUT_URL_PATH + ";jsessionid=" + accountConfig.data.sessionId + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug("Making request to " + url);
        node_fetch_1.default(url)
            .then(function (res) {
            if (res.status === 200)
                resolve();
            else
                reject(res.statusText || res.body);
        })
            .catch(reject);
    });
}
exports.logoutRequest = logoutRequest;
//# sourceMappingURL=logout.js.map