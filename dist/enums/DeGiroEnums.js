"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ORDERS_TYPES = exports.PORTFOLIO_POSITIONS_TYPE_ENUM = exports.DeGiroSort = exports.DeGiroProducTypes = exports.DeGiroTimeTypes = exports.DeGiroMarketOrderTypes = exports.DeGiroActions = exports.DEGIRO_API_PATHS = void 0;
var DEGIRO_API_PATHS;
(function (DEGIRO_API_PATHS) {
    DEGIRO_API_PATHS["BASE_API_URL"] = "https://trader.degiro.nl/";
    DEGIRO_API_PATHS["BASE_REPORT_DOWNLOAD_URI"] = "document/download/";
    DEGIRO_API_PATHS["LOGIN_URL_PATH"] = "login/secure/login";
    DEGIRO_API_PATHS["LOGOUT_URL_PATH"] = "trading/secure/logout";
    DEGIRO_API_PATHS["GET_ACCOUNT_CONFIG_PATH"] = "login/secure/config";
    DEGIRO_API_PATHS["GET_GENERIC_DATA_PATH"] = "v5/update/";
    DEGIRO_API_PATHS["CREATE_ORDER_PATH"] = "v5/checkOrder";
    DEGIRO_API_PATHS["GET_ACCOUNT_STATE_PATH"] = "v6/accountoverview";
    DEGIRO_API_PATHS["GET_ACCOUNT_INFO_PATH"] = "v5/account/info/";
    DEGIRO_API_PATHS["GET_LATESTS_NEWS_PATH"] = "newsfeed/v2/latest-news";
    DEGIRO_API_PATHS["GET_TOP_NEWS_PATH"] = "newsfeed/v2/top-news-preview";
    DEGIRO_API_PATHS["GET_WEB_SETTINGS_PATH"] = "settings/web";
    DEGIRO_API_PATHS["GET_WEB_USER_SETTINGS_PATH"] = "settings/user";
    DEGIRO_API_PATHS["GET_ACCOUNT_REPORTS_PATH"] = "document/list/report";
    DEGIRO_API_PATHS["STOCKS_SEARCH_PATH"] = "v5/stocks";
})(DEGIRO_API_PATHS = exports.DEGIRO_API_PATHS || (exports.DEGIRO_API_PATHS = {}));
var DeGiroActions;
(function (DeGiroActions) {
    DeGiroActions["BUY"] = "BUY";
    DeGiroActions["SELL"] = "SELL";
})(DeGiroActions = exports.DeGiroActions || (exports.DeGiroActions = {}));
var DeGiroMarketOrderTypes;
(function (DeGiroMarketOrderTypes) {
    DeGiroMarketOrderTypes[DeGiroMarketOrderTypes["LIMITED"] = 0] = "LIMITED";
    DeGiroMarketOrderTypes[DeGiroMarketOrderTypes["MARKET"] = 2] = "MARKET";
    DeGiroMarketOrderTypes[DeGiroMarketOrderTypes["STOP_LOSS"] = 3] = "STOP_LOSS";
    DeGiroMarketOrderTypes[DeGiroMarketOrderTypes["STOP_LOSS_LIMIT"] = 1] = "STOP_LOSS_LIMIT";
})(DeGiroMarketOrderTypes = exports.DeGiroMarketOrderTypes || (exports.DeGiroMarketOrderTypes = {}));
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
var PORTFOLIO_POSITIONS_TYPE_ENUM;
(function (PORTFOLIO_POSITIONS_TYPE_ENUM) {
    PORTFOLIO_POSITIONS_TYPE_ENUM["ALL"] = "all";
    PORTFOLIO_POSITIONS_TYPE_ENUM["ALL_POSITIONS"] = "allPositions";
    PORTFOLIO_POSITIONS_TYPE_ENUM["OPEN"] = "open";
    PORTFOLIO_POSITIONS_TYPE_ENUM["CLOSED"] = "closed";
})(PORTFOLIO_POSITIONS_TYPE_ENUM = exports.PORTFOLIO_POSITIONS_TYPE_ENUM || (exports.PORTFOLIO_POSITIONS_TYPE_ENUM = {}));
var GET_ORDERS_TYPES;
(function (GET_ORDERS_TYPES) {
    GET_ORDERS_TYPES["ACTIVE"] = "orders";
    GET_ORDERS_TYPES["HISTORICAL"] = "historicalOrders";
    GET_ORDERS_TYPES["TRANSACTIONS"] = "transactions";
})(GET_ORDERS_TYPES = exports.GET_ORDERS_TYPES || (exports.GET_ORDERS_TYPES = {}));
//# sourceMappingURL=DeGiroEnums.js.map