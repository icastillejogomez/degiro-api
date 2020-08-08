"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
var createURLQuery = function (options) {
    // Destructure the options parameter
    var text = options.text, _a = options.type, type = _a === void 0 ? undefined : _a, _b = options.sortColumn, sortColumn = _b === void 0 ? undefined : _b, _c = options.sortType, sortType = _c === void 0 ? undefined : _c, _d = options.limit, limit = _d === void 0 ? 10 : _d, _e = options.offset, offset = _e === void 0 ? 0 : _e;
    // Create the query
    var res = "&searchText=" + encodeURIComponent(text);
    if (type)
        res += "&type=" + encodeURIComponent(type);
    if (sortColumn)
        res += "&sortColumn=" + encodeURIComponent(sortColumn);
    if (sortType)
        res += "&sortType=" + encodeURIComponent(sortType);
    if (limit)
        res += "&limit=" + encodeURIComponent(limit);
    if (offset)
        res += "&offset=" + encodeURIComponent(offset);
    return res;
};
function searchProductRequest(options, accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        // Preparae de request
        var params = createURLQuery(options);
        // Do de request
        utils_1.debug("Making a search request to url: " + accountConfig.data.productSearchUrl + "v5/products/lookup?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountData.data.id + "&" + params + "}");
        fetch(accountConfig.data.productSearchUrl + "v5/products/lookup?intAccount=" + accountData.data.intAccount + "&sessionId=" + accountConfig.data.sessionId + "&" + params)
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var products = _a.products;
            return resolve(products);
        })
            .catch(reject);
    });
}
exports.searchProductRequest = searchProductRequest;
//# sourceMappingURL=searchProductRequest.js.map