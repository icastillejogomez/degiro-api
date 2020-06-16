"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPortfolio = void 0;
var DeGiroEnums_1 = require("../enums/DeGiroEnums");
/**
 * Transform the object format of a portfolio position
 * @param position
 */
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
/**
 * Apply filter to get only open or closed positions or get all available positions
 * @param config
 */
var filterPorfolio = function (config) { return function (position) {
    // Check (non-check) all positions
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.ALL)
        return true;
    // Check if ID is not a number
    if (isNaN(parseInt(position.id, 10)) || position.positionType !== 'PRODUCT')
        return false;
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.ALL_POSITIONS)
        return true;
    // Check if size is not 0
    if (config.type === DeGiroEnums_1.PORTFOLIO_POSITIONS_TYPE_ENUM.OPEN && position.size !== undefined)
        return parseFloat(position.size) !== 0;
    // Check if size is zero
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