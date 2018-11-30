import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'
export const gethistorybalance = function({StoreSerial, StartTime, EndTime}) {
    const rqParams = {
        FunCode: 65051,
        PageSiz: 60,
        StoreSerial,
        StartDate: retdayTime(StartTime),
        EndDate: retdayTime(EndTime)
        // 时间参数不同
    }
    return reqWrap(rqParams)
}

export const subhistorybalance = function({StoreSerial, PageID, StartTime, EndTime}) {
    const rqParams = {
        FunCode: 65051,
        StoreSerial,
        PageID,
        StartDate: retdayTime(StartTime),
        EndDate: retdayTime(EndTime)
    }
    return reqWrap(rqParams)
}
