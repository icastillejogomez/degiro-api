import { CashFoundType, AccountConfigType, PortfolioPositionType, AccountDataType } from '../types';
/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {
    login(): Promise<void>;
    hasLogin(): boolean;
    getAccountConfig(): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    getCashFunds(): CashFoundType[];
    getPortfolio(): PortfolioPositionType[];
    printConfig(): void;
    printConfig(): void;
}
//# sourceMappingURL=DeGiroClassInterface.d.ts.map