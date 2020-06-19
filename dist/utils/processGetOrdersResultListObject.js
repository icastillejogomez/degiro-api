"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processGetOrdersResultListObject = void 0;
exports.processGetOrdersResultListObject = function (objectData) {
    var _a;
    var arrayDataToExtract = objectData.value;
    var result = {};
    for (var i = 0; i < arrayDataToExtract.length; i++) {
        var data = arrayDataToExtract[i];
        if (data.isAdded) {
            Object.assign(result, (_a = {},
                _a[data.name] = data.value,
                _a));
        }
    }
    return result;
};
//# sourceMappingURL=processGetOrdersResultListObject.js.map