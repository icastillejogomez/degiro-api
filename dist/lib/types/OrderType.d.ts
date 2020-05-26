import { DeGiroActions, DeGiroOrderTypes, DeGiroTimeTypes } from '../enums/DeGiroEnums';
export declare type OrderType = {
    buySell: DeGiroActions;
    orderType: DeGiroOrderTypes;
    productId: string;
    size: number;
    timeType: DeGiroTimeTypes;
    limitedPrice: number;
    stopPrice: number;
};
//# sourceMappingURL=OrderType.d.ts.map