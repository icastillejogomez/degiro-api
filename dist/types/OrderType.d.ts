import { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } from '../enums/DeGiroEnums';
export declare type OrderType = {
    buySell: DeGiroActions;
    orderType: DeGiroMarketOrderTypes;
    price?: Number;
    productId: string;
    size: number;
    stopPrice?: number;
    timeType: DeGiroTimeTypes;
};
//# sourceMappingURL=OrderType.d.ts.map