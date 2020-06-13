import { TransactionFeeType } from '.'

export type CreateOrderResultType = {
  confirmationId: String,
  freeSpaceNew: Number,
  transactionFees: [TransactionFeeType],
}