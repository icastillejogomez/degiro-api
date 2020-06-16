"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountConfigRequest = void 0;
// Import modules
var node_fetch_1 = __importDefault(require("node-fetch"));
// Import enums
var enums_1 = require("../enums");
var BASE_API_URL = enums_1.MainDeGiroConsts.BASE_API_URL, GET_ACCOUNT_CONFIG_PATH = enums_1.MainDeGiroConsts.GET_ACCOUNT_CONFIG_PATH;
// Import debug console log
var utils_1 = require("../utils");
function getAccountConfigRequest(sessionId) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + sessionId + ";",
            },
        };
        // Do the request to get a account config data
        utils_1.debug("Making request to " + BASE_API_URL + GET_ACCOUNT_CONFIG_PATH + " with JSESSIONID: " + sessionId);
        node_fetch_1.default(BASE_API_URL + GET_ACCOUNT_CONFIG_PATH, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            utils_1.debug('Response:\n', JSON.stringify(res, null, 2));
            resolve(res);
        })
            .catch(reject);
    });
}
exports.getAccountConfigRequest = getAccountConfigRequest;
//# sourceMappingURL=getAccountConfig.js.map