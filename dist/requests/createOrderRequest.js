"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderRequest = void 0;
// Import modules
var node_fetch_1 = __importDefault(require("node-fetch"));
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
        };
        var uri = accountConfig.data.tradingUrl + "v5/checkOrder;jsessionid=" + accountConfig.data.sessionId + "?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId;
        utils_1.debug(uri, requestOptions);
        node_fetch_1.default(uri, requestOptions)
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