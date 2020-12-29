"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountConfigRequest = void 0;
// Import enums
var enums_1 = require("../enums");
var BASE_API_URL = enums_1.DEGIRO_API_PATHS.BASE_API_URL, GET_ACCOUNT_CONFIG_PATH = enums_1.DEGIRO_API_PATHS.GET_ACCOUNT_CONFIG_PATH;
// Import debug console log
var utils_1 = require("../utils");
function getAccountConfigRequest(sessionId) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        utils_1.debug("Making request to " + BASE_API_URL + GET_ACCOUNT_CONFIG_PATH + " with JSESSIONID: " + sessionId);
        fetch(BASE_API_URL + GET_ACCOUNT_CONFIG_PATH, requestOptions)
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