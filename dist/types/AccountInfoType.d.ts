export declare type AccountInfoType = {
    baseCurrency: string;
    cashFunds: AccountInfoCashFunds;
    clientId: number;
    compensationCapping: number;
    currencyPairs: AccountInfoCurrencyPairs;
    marginType: string;
};
declare type CashFund = {
    id: number;
    name: string;
    productIds: number[];
};
declare type AccountInfoCashFunds = {
    [key: string]: CashFund[];
};
declare type AccountInfoCurrencyPairs = {
    [key: string]: {
        id: number;
        price: string;
    };
};
export {};
//# sourceMappingURL=AccountInfoType.d.ts.map