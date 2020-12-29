"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularStocksRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
// Importamos constantes
var enums_1 = require("../enums");
var STOCKS_SEARCH_PATH = enums_1.DEGIRO_API_PATHS.STOCKS_SEARCH_PATH;
// tslint:disable-next-line: max-line-length
function getPopularStocksRequest(accountData, accountConfig, config) {
    return new Promise(function (resolve, reject) {
        // Create fetch request options
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Create params to reach popular stocks
        var _a = config.popularOnly, popularOnly = _a === void 0 ? true : _a, _b = config.requireTotal, requireTotal = _b === void 0 ? false : _b, _c = config.limit, limit = _c === void 0 ? 9 : _c, _d = config.offset, offset = _d === void 0 ? 0 : _d;
        var params = '';
        params += "popularOnly=" + popularOnly + "&";
        params += "requireTotal=" + requireTotal + "&";
        params += "offset=" + offset + "&";
        params += "limit=" + limit + "&";
        params += "intAccount=" + accountData.data.intAccount + "&";
        params += "sessionId=" + accountConfig.data.sessionId;
        // Do the request to get a account config data
        var url = "" + accountConfig.data.productSearchUrl + STOCKS_SEARCH_PATH + "?" + params;
        utils_1.debug("Making request to " + url + " with params: \n" + requestOptions);
        fetch(url, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            resolve(res.products);
        })
            .catch(reject);
    });
}
exports.getPopularStocksRequest = getPopularStocksRequest;
//# sourceMappingURL=getPopularStocksRequest.js.map