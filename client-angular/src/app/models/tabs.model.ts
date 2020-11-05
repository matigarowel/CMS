import { ButtonModel } from './buttons.model';
import { FormsModel } from './forms.model';
import { TablesModel } from './tables.model';
export interface TabsModel{
    name: string;
    group?: string;
    icon?: string;
    color?: string;
    form?: FormsModel[];
    table?: TablesModel[];
    buttons?: ButtonModel[];
}