export declare enum MainDeGiroConsts {
    BASE_API_URL = "https://trader.degiro.nl/",
    LOGIN_URL_PATH = "login/secure/login",
    LOGOUT_URL_PATH = "trading/secure/logout",
    GET_ACCOUNT_CONFIG_PATH = "login/secure/config"
}
export declare enum DeGiroActions {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum DeGiroMarketOrderTypes {
    LIMITED = 0,
    MARKET = 2,
    STOP_LOSS = 3,
    STOP_LOSS_LIMIT = 1
}
export declare enum DeGiroTimeTypes {
    DAY = 1,
    PERMANENT = 3
}
export declare enum DeGiroProducTypes {
    shares = 1,
    bonds = 2,
    futures = 7,
    options = 8,
    investmendFunds = 13,
    leveragedProducts = 14,
    etfs = 131,
    cfds = 535,
    warrants = 536
}
export declare enum DeGiroSort {
    ASC = "asc",
    DESC = "desc"
}
export declare enum PORTFOLIO_POSITIONS_TYPE_ENUM {
    ALL = "all",
    ALL_POSITIONS = "allPositions",
    OPEN = "open",
    CLOSED = "closed"
}
//# sourceMappingURL=DeGiroEnums.d.ts.map