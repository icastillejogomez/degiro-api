"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPortfolio = void 0;
var DeGiroEnums_1 = require("../enums/DeGiroEnums");
var processPosition = function (position) {
    var _a;
    var result = {};
    for (var i = 0; i < position.value.length; i++) {
        if (position.value[i].value) {
            Object.assign(result, (_a = {},
                _a[position.value[i].name] = position.value[i].value,
                _a));
        }
    }
    return result;
};
var filterPorfolio = function (config) { return function (position) {
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.ALL)
        return true;
    if (isNaN(parseInt(position.id, 10)) || position.positionType !== 'PRODUCT')
        return false;
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.ALL_POSITIONS)
        return true;
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.OPEN && position.size !== undefined)
        return parseFloat(position.size) !== 0;
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.CLOSED)
        return position.size === undefined || parseFloat(position.size) === 0;
    return false;
}; };
function processPortfolio(positions, config) {
    var results = positions
        .map(processPosition)
        .filter(filterPorfolio(config));
    return results;
}
exports.processPortfolio = processPortfolio;
//# sourceMappingURL=processPortfolio.js.map