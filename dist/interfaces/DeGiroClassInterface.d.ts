import { CashFoundType, AccountConfigType, GetPorfolioConfigType, AccountDataType, SearchProductOptionsType, SearchProductResultType, OrderType, CreateOrderResultType, IsLoginOptionsType, GetOrdersConfigType, GetOrdersResultType, GetAccountStateOptionsType, AccountReportsType, AccountInfoType, FavouriteProductType, StockType, GetHistoricalOrdersOptionsType, HistoricalOrdersType, GetNewsOptionsType, NewsType, WebUserSettingType, ConfigDictionaryType, i18nMessagesType } from '../types';
/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {
    login(): Promise<AccountDataType>;
    logout(): Promise<void>;
    isLogin(options?: IsLoginOptionsType): boolean | Promise<boolean>;
    getJSESSIONID(): string | undefined;
    getAccountConfig(sessionId: string): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    getAccountState(options: GetAccountStateOptionsType): Promise<any[]>;
    getAccountReports(): Promise<AccountReportsType>;
    getAccountInfo(): Promise<AccountInfoType>;
    searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>;
    getCashFunds(): CashFoundType[];
    getPortfolio(config: GetPorfolioConfigType): Promise<any[]>;
    getFavouriteProducts(): Promise<FavouriteProductType[]>;
    getPopularStocks(): Promise<StockType[]>;
    getOrders(options: GetOrdersConfigType): Promise<GetOrdersResultType>;
    getHistoricalOrders(options: GetHistoricalOrdersOptionsType): Promise<HistoricalOrdersType>;
    createOrder(order: OrderType): Promise<CreateOrderResultType>;
    executeOrder(order: OrderType, executeId: string): Promise<String>;
    deleteOrder(orderId: String): Promise<void>;
    getProductsByIds(ids: string[]): Promise<any[]>;
    getNews(options: GetNewsOptionsType): Promise<NewsType>;
    getWebi18nMessages(lang: string): Promise<i18nMessagesType>;
    getWebSettings(): Promise<any>;
    getWebUserSettings(): Promise<WebUserSettingType>;
    getConfigDictionary(): Promise<ConfigDictionaryType>;
}
//# sourceMappingURL=DeGiroClassInterface.d.ts.map