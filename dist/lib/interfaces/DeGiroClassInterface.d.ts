import { CashFoundType, AccountConfigType, GetPorfolioConfigType, AccountDataType, SearchProductOptionsType, SearchProductResultType, OrderType, CreateOrderResultType } from '../types';
/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {
    login(): Promise<void>;
    hasLogin(): boolean;
    getAccountConfig(): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    getCashFunds(): CashFoundType[];
    getPortfolio(config: GetPorfolioConfigType): Promise<any[]>;
    getProductsByIds(ids: string[]): Promise<any[]>;
    searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>;
    createOrder(order: OrderType): Promise<CreateOrderResultType>;
    executeOrder(order: OrderType, executeId: string): Promise<String>;
    deleteOrder(orderId: String): Promise<void>;
}
//# sourceMappingURL=DeGiroClassInterface.d.ts.map