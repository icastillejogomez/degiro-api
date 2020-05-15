import { DeGiroClassInterface } from './interfaces';
import { DeGiroSettupType, AccountConfigType, AccountDataType } from './types';
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
    constructor(params: DeGiroSettupType);
    static create(params: DeGiroSettupType): DeGiro;
    login(): Promise<void>;
    getAccountConfig(): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    hasLogin(): boolean;
    getCashFunds(): import('./types/CashFoundType').CashFoundType[];
    getPortfolio(): import('./types/PortfolioPositionType').PortfolioPositionType[];
    printConfig(): void;
}
//# sourceMappingURL=DeGiro.d.ts.map