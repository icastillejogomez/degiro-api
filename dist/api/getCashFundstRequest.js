"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCashFundstRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
var DeGiroEnums_1 = require("../enums/DeGiroEnums");
var GET_GENERIC_DATA_PATH = DeGiroEnums_1.DEGIRO_API_PATHS.GET_GENERIC_DATA_PATH;
// tslint:disable-next-line: max-line-length
function getCashFundstRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var params = '';
        params += 'cashFunds=0&';
        params += 'limit=100';
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        var uri = "" + accountConfig.data.tradingUrl + GET_GENERIC_DATA_PATH + accountData.data.intAccount + ";jsessionid=" + accountConfig.data.sessionId + "?" + params;
        utils_1.debug("Making request to " + uri);
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (!res.cashFunds || !res.cashFunds.value || !Array.isArray(res.cashFunds.value)) {
                return reject('Invalid response format');
            }
            var data = res.cashFunds.value;
            utils_1.debug('Response:\n', JSON.stringify(res, null, 2));
            resolve(data.map(utils_1.processGetCashFundsResultListObject));
        })
            .catch(reject);
    });
}
exports.getCashFundstRequest = getCashFundstRequest;
//# sourceMappingURL=getCashFundstRequest.js.map