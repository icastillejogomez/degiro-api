"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByIdsRequest = void 0;
// Import modules
var node_fetch_1 = __importDefault(require("node-fetch"));
// tslint:disable-next-line: max-line-length
function getProductsByIdsRequest(ids, accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(ids.map(function (id) { return id.toString(); })),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        node_fetch_1.default(accountConfig.data.productSearchUrl + "v5/products/info?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) { return resolve(res.data); })
            .catch(reject);
    });
}
exports.getProductsByIdsRequest = getProductsByIdsRequest;
//# sourceMappingURL=getProductsByIdsRequest.js.map