"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
function deleteOrderRequest(orderId, accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: '',
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // tslint:disable-next-line: max-line-length
        var uri = "https://trader.degiro.nl/trading/secure/v5/order/" + orderId + ";jsessionid=" + accountConfig.data.sessionId + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug(uri, requestOptions);
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            utils_1.debug(res);
            if (res.errors)
                return reject(res.errors);
            resolve();
        })
            .catch(reject);
    });
}
exports.deleteOrderRequest = deleteOrderRequest;
//# sourceMappingURL=deleteOrderRequest.js.map