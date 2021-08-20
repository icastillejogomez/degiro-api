import { AccountConfigType, AccountDataType, GetTransactionsOptionsType, TransactionType } from "../types";
export declare function getTransactionsRequest(accountData: AccountDataType, accountConfig: AccountConfigType, config: GetTransactionsOptionsType): Promise<TransactionType[]>;
