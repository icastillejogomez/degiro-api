"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRequest = void 0;
// Import enums
var enums_1 = require("../enums");
var BASE_API_URL = enums_1.DEGIRO_API_PATHS.BASE_API_URL, LOGOUT_URL_PATH = enums_1.DEGIRO_API_PATHS.LOGOUT_URL_PATH;
// Import debug console log
var utils_1 = require("../utils");
function logoutRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        // Do the request to get a session
        var url = "" + BASE_API_URL + LOGOUT_URL_PATH + ";jsessionid=" + accountConfig.data.sessionId + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug("Making request to " + url);
        fetch(url)
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