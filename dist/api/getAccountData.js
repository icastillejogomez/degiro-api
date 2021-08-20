"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountDataRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
function getAccountDataRequest(accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        utils_1.debug("Making request to " + accountConfig.data.paUrl + "client?sessionId=" + accountConfig.data.sessionId);
        fetch(accountConfig.data.paUrl + "client?sessionId=" + accountConfig.data.sessionId, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            utils_1.debug('Response:\n', JSON.stringify(res, null, 2));
            resolve(res);
        })
            .catch(reject);
    });
}
exports.getAccountDataRequest = getAccountDataRequest;
//# sourceMappingURL=getAccountData.js.map