export class Field {
    field: string;
    header: string;

    //Non Mandatory
    checked?: boolean;
    size?: number;
    date?: boolean | null;
    cellRenderer?: any;
    editable?: boolean;
}
