"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeGiroSort = exports.DeGiroProducTypes = exports.DeGiroTimeTypes = exports.DeGiroOrderTypes = exports.DeGiroActions = exports.MainDeGiroConsts = void 0;
var MainDeGiroConsts;
(function (MainDeGiroConsts) {
    MainDeGiroConsts["BASE_API_URL"] = "https://trader.degiro.nl/";
    MainDeGiroConsts["LOGIN_URL_PATH"] = "login/secure/login";
    MainDeGiroConsts["GET_ACCOUNT_CONFIG_PATH"] = "login/secure/config";
})(MainDeGiroConsts = exports.MainDeGiroConsts || (exports.MainDeGiroConsts = {}));
var DeGiroActions;
(function (DeGiroActions) {
    DeGiroActions["BUY"] = "BUY";
    DeGiroActions["SELL"] = "SELL";
})(DeGiroActions = exports.DeGiroActions || (exports.DeGiroActions = {}));
var DeGiroOrderTypes;
(function (DeGiroOrderTypes) {
    DeGiroOrderTypes[DeGiroOrderTypes["LIMITED"] = 0] = "LIMITED";
    DeGiroOrderTypes[DeGiroOrderTypes["MARKET"] = 2] = "MARKET";
    DeGiroOrderTypes[DeGiroOrderTypes["STOP_LOSS"] = 3] = "STOP_LOSS";
    DeGiroOrderTypes[DeGiroOrderTypes["STOP_LOSS_LIMIT"] = 1] = "STOP_LOSS_LIMIT";
})(DeGiroOrderTypes = exports.DeGiroOrderTypes || (exports.DeGiroOrderTypes = {}));
var DeGiroTimeTypes;
(function (DeGiroTimeTypes) {
    DeGiroTimeTypes[DeGiroTimeTypes["DAY"] = 1] = "DAY";
    DeGiroTimeTypes[DeGiroTimeTypes["PERMANENT"] = 3] = "PERMANENT";
})(DeGiroTimeTypes = exports.DeGiroTimeTypes || (exports.DeGiroTimeTypes = {}));
var DeGiroProducTypes;
(function (DeGiroProducTypes) {
    // all = undefined, undefined is not allowed to set on enum
    DeGiroProducTypes[DeGiroProducTypes["shares"] = 1] = "shares";
    DeGiroProducTypes[DeGiroProducTypes["bonds"] = 2] = "bonds";
    DeGiroProducTypes[DeGiroProducTypes["futures"] = 7] = "futures";
    DeGiroProducTypes[DeGiroProducTypes["options"] = 8] = "options";
    DeGiroProducTypes[DeGiroProducTypes["investmendFunds"] = 13] = "investmendFunds";
    DeGiroProducTypes[DeGiroProducTypes["leveragedProducts"] = 14] = "leveragedProducts";
    DeGiroProducTypes[DeGiroProducTypes["etfs"] = 131] = "etfs";
    DeGiroProducTypes[DeGiroProducTypes["cfds"] = 535] = "cfds";
    DeGiroProducTypes[DeGiroProducTypes["warrants"] = 536] = "warrants";
})(DeGiroProducTypes = exports.DeGiroProducTypes || (exports.DeGiroProducTypes = {}));
var DeGiroSort;
(function (DeGiroSort) {
    DeGiroSort["ASC"] = "asc";
    DeGiroSort["DESC"] = "desc";
})(DeGiroSort = exports.DeGiroSort || (exports.DeGiroSort = {}));
//# sourceMappingURL=DeGiroEnums.js.map