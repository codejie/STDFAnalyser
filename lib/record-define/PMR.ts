import { UInt16Data, VariableStringData, UInt8Data } from "../data-define"
import { RecordBase, RecordType, RecordSub } from "."

export default class PMRRecord extends RecordBase {
    constructor() {
        super('PMR', RecordType.REC_TYPE_1, RecordSub.REC_SUB_60, 'Pin Map Record')

        this.addField(new UInt16Data('PMR_INDX', 'Unique index associated with pin'))
        this.addField(new UInt16Data('CHAN_TYP', 'Channel type'))
        this.addField(new VariableStringData('CHAN_NAM', 'Channel name'))
        this.addField(new VariableStringData('PHY_NAM', 'Physical name of pin'))
        this.addField(new VariableStringData('LOG_NAM', 'Logical name of pin'))
        this.addField(new UInt8Data('HEAD_NUM', 'Head number associated with channel'))
        this.addField(new UInt8Data('SITE_NUM', 'Site number associated with channel'))
    }    
}