"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsRequest = void 0;
var enums_1 = require("../enums");
var utils_1 = require("../utils");
var GET_TRANSACTIONS_PATH = enums_1.DEGIRO_API_PATHS.GET_TRANSACTIONS_PATH;
function getTransactionsRequest(accountData, accountConfig, config) {
    return new Promise(function (resolve, reject) {
        // Create params to get orders by types
        var params = '';
        params += "fromDate=" + encodeURIComponent(config.fromDate) + "&";
        params += "toDate=" + encodeURIComponent(config.toDate) + "&";
        params += "groupTransactionsByOrder";
        params += "intAccount=" + accountData.data.intAccount + "&";
        params += "sessionId=" + accountConfig.data.sessionId;
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        var uri = "" + accountConfig.data.reportingUrl + GET_TRANSACTIONS_PATH + "?" + params;
        utils_1.debug("Making request to " + uri);
        utils_1.fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(reject);
    });
}
exports.getTransactionsRequest = getTransactionsRequest;
//# sourceMappingURL=getTransactionsRequest.js.map