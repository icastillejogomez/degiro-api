"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebSettingsRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
// Importamos constantes
var enums_1 = require("../enums");
var GET_WEB_SETTINGS_PATH = enums_1.DEGIRO_API_PATHS.GET_WEB_SETTINGS_PATH;
function getWebSettingsRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        var uri = "" + accountConfig.data.paUrl + GET_WEB_SETTINGS_PATH + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug("Making request to " + uri);
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            utils_1.debug('Response:\n', JSON.stringify(res, null, 2));
            var data = res.data;
            resolve(data);
        })
            .catch(reject);
    });
}
exports.getWebSettingsRequest = getWebSettingsRequest;
//# sourceMappingURL=getWebSettingsRequest.js.map