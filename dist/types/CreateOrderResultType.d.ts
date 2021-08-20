import { TransactionFeeType } from '.';
export declare type CreateOrderResultType = {
    confirmationId: String;
    freeSpaceNew: Number;
    transactionFees: [TransactionFeeType];
};
