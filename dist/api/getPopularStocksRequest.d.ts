import { AccountConfigType, AccountDataType, StockType, GetPopularStocksConfigType } from '../types';
export declare function getPopularStocksRequest(accountData: AccountDataType, accountConfig: AccountConfigType, config: GetPopularStocksConfigType): Promise<StockType[]>;
