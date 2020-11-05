export interface FormsModel{
    field: string;
    prop: PropertyModel;
  }
  
  export interface FormValidators{
    min?: number;
    max?: number;
    required: boolean;
    email?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    custom?: any;
  }

  export interface PropertyModel{
    element?: string;
    value: any;
    label?: string;
    validate?: FormValidators;
    width?: number;
    disabled?: boolean;
    primary?: boolean;
  }