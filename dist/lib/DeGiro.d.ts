import { DeGiroClassInterface } from './interfaces';
import { DeGiroSettupType, AccountConfigType, AccountDataType, CashFoundType, SearchProductResultType, GetPorfolioConfigType, SearchProductOptionsType, OrderType, CreateOrderResultType } from './types';
/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
export declare class DeGiro implements DeGiroClassInterface {
    private readonly username;
    private readonly pwd;
    private loginResponse;
    private accountConfig;
    private accountData;
    constructor(params?: DeGiroSettupType);
    static create(params: DeGiroSettupType): DeGiro;
    login(): Promise<void>;
    logout(): Promise<void>;
    getAccountConfig(): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    isLogin(): boolean;
    getCashFunds(): CashFoundType[];
    getPortfolio(config: GetPorfolioConfigType): Promise<any[]>;
    completePortfolioDetails(portfolio: any[], getProductDetails: boolean): Promise<any[]>;
    getProductsByIds(ids: string[]): Promise<any[]>;
    searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>;
    createOrder(order: OrderType): Promise<CreateOrderResultType>;
    executeOrder(order: OrderType, executeId: String): Promise<String>;
    deleteOrder(orderId: String): Promise<void>;
}
//# sourceMappingURL=DeGiro.d.ts.map