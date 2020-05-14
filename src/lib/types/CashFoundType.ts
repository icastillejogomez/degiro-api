
// {
//   cashFunds: [
//     {id: '2', name: 'EUR', value: 1935.8, valueBaseCurr: 1935.8, rate: 1},
//     {id: '9885', name: 'USD', value: 0, valueBaseCurr: 0, rate: 0.9102},
//     ...
//   ]
// }

export type CashFoundType = {
  id: string, 
  name: string, 
  value: number, 
  valueBaseCurr: number, 
  rate: number
}