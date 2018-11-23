import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'
export const getcollectdata = function({StoreSerial, StartTime, EndTime, PayType, ExecuteType, CurrCode, CusBankID}) {
    const rqParams = {
        FunCode: 65057,
        StoreSerial,
        StartTime: new ParseTime(StartTime).format().formatTime,
        EndTime: new ParseTime(EndTime).format().formatTime,
        PayType,
        ExecuteType,
        CurrCode,
        CusBankID
    }
    return reqWrap(rqParams)
}
