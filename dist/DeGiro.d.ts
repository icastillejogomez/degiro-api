import { DeGiroClassInterface } from './interfaces';
import { DeGiroSettupType, AccountConfigType, AccountDataType, CashFoundType, SearchProductResultType, GetPorfolioConfigType, SearchProductOptionsType, OrderType, CreateOrderResultType, IsLoginOptionsType, GetOrdersConfigType, GetOrdersResultType, GetAccountStateOptionsType, AccountReportsType, AccountInfoType, GetHistoricalOrdersOptionsType, HistoricalOrdersType, FavouriteProductType, StockType, GetNewsOptionsType, NewsType, WebUserSettingType, ConfigDictionaryType, i18nMessagesType, WebSettingsType, GetPopularStocksConfigType } from './types';
/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
export declare class DeGiro implements DeGiroClassInterface {
    private readonly username;
    private readonly pwd;
    private readonly oneTimePassword;
    private jsessionId;
    private accountConfig;
    private accountData;
    constructor(params?: DeGiroSettupType);
    static create(params: DeGiroSettupType): DeGiro;
    login(): Promise<AccountDataType>;
    logout(): Promise<void>;
    isLogin(options?: IsLoginOptionsType): boolean | Promise<boolean>;
    private hasSessionId;
    private loginWithJSESSIONID;
    getJSESSIONID: () => string | undefined;
    getAccountConfig(sessionId?: string): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    getAccountState(options: GetAccountStateOptionsType): Promise<any[]>;
    getAccountReports(): Promise<AccountReportsType>;
    getAccountInfo(): Promise<AccountInfoType>;
    searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>;
    getCashFunds(): Promise<CashFoundType[]>;
    getPortfolio(config: GetPorfolioConfigType): Promise<any[]>;
    private completePortfolioDetails;
    getFavouriteProducts(): Promise<FavouriteProductType[]>;
    getPopularStocks(config?: GetPopularStocksConfigType): Promise<StockType[]>;
    getOrders(config: GetOrdersConfigType): Promise<GetOrdersResultType>;
    getHistoricalOrders(options: GetHistoricalOrdersOptionsType): Promise<HistoricalOrdersType>;
    createOrder(order: OrderType): Promise<CreateOrderResultType>;
    executeOrder(order: OrderType, executeId: String): Promise<String>;
    deleteOrder(orderId: String): Promise<void>;
    getProductsByIds(ids: string[]): Promise<any[]>;
    getNews(options: GetNewsOptionsType): Promise<NewsType>;
    getWebi18nMessages(lang?: string): Promise<i18nMessagesType>;
    getWebSettings(): Promise<WebSettingsType>;
    getWebUserSettings(): Promise<WebUserSettingType>;
    getConfigDictionary(): Promise<ConfigDictionaryType>;
}
//# sourceMappingURL=DeGiro.d.ts.map