import { UInt8Data, FixedStringData, FloatData, Int16Data, DataBase } from "../data-define"
import { RecordBase, RecordType, RecordSub } from "."

function ValueNotes_WF_UNITS(this: DataBase): string {
    switch(this.value) {
        case 0:
            return 'ukn'
        case 1:
            return 'inch'
        case 2:
            return 'cm'
        case 3:
            return 'mm'
        case 4:
            return 'm'
        default:
            return '-'
    }
}

function ValueNotes_WF_FLAT(this: DataBase): string {
    switch (this.value) {
        case 'U':
            return 'UP'
        case 'D':
            return 'DOWN'
        case 'L':
            return 'LEFT'
        case 'R':
            return 'RIGHT'
        default:
            return '-'
    }
}


export default class WCRRecord extends RecordBase {
    constructor() {
        super('WCR', RecordType.REC_TYPE_2, RecordSub.REC_SUB_30, 'Wafer Configuration Record')

        this.addField(new FloatData('WAFR_SIZ', 'Diameter of wafer in WF_UNITS'))
        this.addField(new FloatData('DIE_HT', 'Height of die in WF_UNITS'))
        this.addField(new FloatData('DIE_WID', 'Width of die in WF_UNITS'))
        this.addField(new UInt8Data('WF_UNITS', 'Units for wafer and die dimensions', ValueNotes_WF_UNITS))
        this.addField(new FixedStringData('WF_FLAT', 'Orientation of wafer flat', ValueNotes_WF_FLAT, 1))
        this.addField(new Int16Data('CENTER_X', 'X coordinate of center die on wafer'))
        this.addField(new Int16Data('CENTER_Y', 'Y coordinate of center die on wafer'))
        this.addField(new FixedStringData('POS_X', 'Positive X direction of wafer', ValueNotes_WF_FLAT, 1))
        this.addField(new FixedStringData('POS_Y', 'Positive Y direction of wafer', ValueNotes_WF_FLAT, 1))
    }    
}