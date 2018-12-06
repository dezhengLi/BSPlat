import { reqWrap } from './utils'

export const rechargeWin = function({StoreSerial,rechargeAmt,OrderID,ListBankID}) {
    const rqParams = {
      FunCode: 65053,
      StoreSerial,
      Amt:rechargeAmt,
      OrderID,
      BankID:ListBankID
    }
    return reqWrap(rqParams)
  }