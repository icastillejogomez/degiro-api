"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebi18nMessagesRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
function getWebi18nMessagesRequest(lang, accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        var uri = accountConfig.data.i18nUrl + "messages_" + lang;
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
exports.getWebi18nMessagesRequest = getWebi18nMessagesRequest;
//# sourceMappingURL=getWebi18nMessagesRequest.js.map