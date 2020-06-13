"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeOrderRequest = void 0;
// Import modules
var node_fetch_1 = require("node-fetch");
// Import debug console log
var utils_1 = require("../utils");
function executeOrderRequest(order, executeId, accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(order),
        };
        // tslint:disable-next-line: max-line-length
        var uri = "https://trader.degiro.nl/trading/secure/v5/order/" + executeId + ";jsessionid=" + accountConfig.data.sessionId + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug(uri, requestOptions);
        node_fetch_1.default(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            resolve(res.data.orderId);
        })
            .catch(reject);
    });
}
exports.executeOrderRequest = executeOrderRequest;
//# sourceMappingURL=executeOrderRequest copy.js.map