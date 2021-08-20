"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioRequest = void 0;
var utils_1 = require("../utils");
function getPortfolioRequest(accountData, accountConfig, config) {
    return new Promise(function (resolve, reject) {
        var params = '&portfolio=0';
        utils_1.debug("Making request to " + accountConfig.data.tradingUrl + "v5/update/" + accountData.data.intAccount + ";jsessionid=" + accountConfig.data.sessionId + "?" + params + "}");
        fetch(accountConfig.data.tradingUrl + "v5/update/" + accountData.data.intAccount + ";jsessionid=" + accountConfig.data.sessionId + "?" + params)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            var portfolio = res.portfolio.value;
            var positions = utils_1.processPortfolio(portfolio, config);
            resolve(positions);
        })
            .catch(reject);
    });
}
exports.getPortfolioRequest = getPortfolioRequest;
//# sourceMappingURL=getPortfolioRequest.js.map