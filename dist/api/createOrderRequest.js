"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderRequest = void 0;
// Import Consts
var enums_1 = require("../enums");
var CREATE_ORDER_PATH = enums_1.DEGIRO_API_PATHS.CREATE_ORDER_PATH;
// Import debug console log
var utils_1 = require("../utils");
function createOrderRequest(order, accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(order),
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        var uri = "" + accountConfig.data.tradingUrl + CREATE_ORDER_PATH + ";jsessionid=" + accountConfig.data.sessionId + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug(uri, requestOptions);
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (res.errors)
                return reject(res.errors);
            resolve(res.data);
        })
            .catch(reject);
    });
}
exports.createOrderRequest = createOrderRequest;
//# sourceMappingURL=createOrderRequest.js.map