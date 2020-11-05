import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModel } from '../models/forms.model';

@Injectable({
  providedIn: 'root'
})
export class FormvalidationService {

  constructor() { }

  formGroupValidation(formTemplate: FormsModel[]): FormGroup{
    let group={}
    formTemplate.forEach(f=>{
      group[f.field]= new FormControl({
        value: f.prop.value.selected ||  f.prop.value,
        disabled: f.prop.primary || f.prop.disabled} ,  Validators.compose( 
          [
          // min?: number;
          // max?: number;
          // required?: boolean;
          // email?: string;
          // minLength?: number;
          // maxLength?: number;
          // pattern?: string;
          // custom?: any;
          f.prop.validate?.min? Validators.min(f.prop.validate.min): null, 
          f.prop.validate?.max? Validators.max(f.prop.validate.max): null,
          f.prop.validate?.required? Validators.required: null,
          f.prop.validate?.email? Validators.email: null,
          f.prop.validate?.minLength? Validators.minLength(f.prop.validate.minLength): null,
          f.prop.validate?.maxLength? Validators.maxLength(f.prop.validate.maxLength): null,
          f.prop.validate?.pattern? Validators.pattern(f.prop.validate.pattern): null,
          f.prop.validate?.custom? this[f.prop.validate.custom]: null,
        ]
      ));  
    })
    // this.fieldForm = new FormGroup(group);
    return new FormGroup(group);
  }

}
