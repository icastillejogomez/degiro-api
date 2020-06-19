import {
  CashFoundType,
  AccountConfigType,
  GetPorfolioConfigType,
  AccountDataType,
  SearchProductOptionsType,
  SearchProductResultType,
  OrderType,
  CreateOrderResultType,
  IsLoginOptionsType,
  GetOrdersConfigType,
  GetOrdersResultType,
  GetAccountStateOptionsType,
  AccountReportsType,
  AccountInfoType,
  FavouriteProductType,
  StockType,
  GetHistoricalOrdersOptionsType,
  HistoricalOrdersType,
  GetNewsOptionsType,
  NewsType,
  WebUserSettingType,
  ConfigDictionaryType,
} from '../types'

/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {

  /* Session methods */

  login(): Promise<AccountDataType>

  logout(): Promise<void>

  isLogin(options?: IsLoginOptionsType): boolean | Promise<boolean>

  getJSESSIONID(): string | undefined

  /* Account methods */

  getAccountConfig(sessionId: string): Promise<AccountConfigType>

  getAccountData(): Promise<AccountDataType>

  getAccountState(options: GetAccountStateOptionsType): Promise<any[]>

  getAccountReports(): Promise<AccountReportsType>

  getAccountInfo(): Promise<AccountInfoType>

  /* Search methods */

  searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>

  /* Cash Funds methods */

  getCashFunds(): CashFoundType[]

  /* Porfolio methods */

  getPortfolio(config: GetPorfolioConfigType): Promise<any[]>

  /* Stocks methods */

  getFavouriteProducts(): Promise<FavouriteProductType[]>

  getPopularStocks(): Promise<StockType[]>

  /* Orders methods */

  getOrders(options: GetOrdersConfigType): Promise<GetOrdersResultType>

  getHistoricalOrders(options: GetHistoricalOrdersOptionsType): Promise<HistoricalOrdersType>

  createOrder(order: OrderType): Promise<CreateOrderResultType>

  executeOrder(order: OrderType, executeId: string): Promise<String>

  deleteOrder(orderId: String): Promise<void>

  /* Miscellaneous methods */

  getProductsByIds(ids: string[]): Promise<any[]>

  getNews(options: GetNewsOptionsType): Promise<NewsType>

  getWebi18nMessages(): Promise<any>

  getWebSettings(): Promise<any>

  getWebUserSettings(): Promise<WebUserSettingType>

  getConfigDictionary(): Promise<ConfigDictionaryType>

}
