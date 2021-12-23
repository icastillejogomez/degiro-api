export type TransactionType = {
    buysell: string,
    counterParty: string,
    date: string,
    id: number,
    orderTypeId: number,
    price: number,
    productId: number,
    quantity: number,
    total: number,
    totalInBaseCurrency: number,
    totalPlusFeeInBaseCurrency: number,
    tradingVenue: string,
    transactionTypeId: number,
    transfered: boolean
}