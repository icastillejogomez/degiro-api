"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOverride = void 0;
function fetchOverride(input, init) {
    var _a;
    var newInit = init !== null && init !== void 0 ? init : {};
    newInit.headers = (_a = newInit.headers) !== null && _a !== void 0 ? _a : {};
    newInit.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';
    return fetch(input, newInit);
}
exports.fetchOverride = fetchOverride;
//# sourceMappingURL=fetch.js.map