import { UInt8Data, UInt32Data, VariableStringData, DateData } from "../data-define"
import { RecordBase, RecordType, RecordSub } from "."

export default class WIRRecord extends RecordBase {
    constructor() {
        super('WIR', RecordType.REC_TYPE_2, RecordSub.REC_SUB_10, 'Wafer Information Record')

        this.addField(new UInt8Data('HEAD_NUM', 'Test head number'))
        this.addField(new UInt8Data('SITE_GRP', 'Site group number'))
        this.addField(new DateData('START_T', 'Date and time first part tested'))
        this.addField(new VariableStringData('WAFER_ID', 'Wafer ID'))
    }    
}