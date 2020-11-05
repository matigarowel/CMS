// export interface PinsModel{
//     id: number;
//     name: string;
//     pin_no: number;
//     active: boolean;
//     date_created: string;
//     date_change: string;
//     created_by: string;
// }

import { FormsModel } from './forms.model';


export interface PinsModel{
    data: FormsModel[];
}