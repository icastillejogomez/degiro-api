import { CashFoundType, AccountConfigType, GetPorfolioConfigType, AccountDataType } from '../types';
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
    printConfig(): void;
    printConfig(): void;
}
//# sourceMappingURL=DeGiroClassInterface.d.ts.map