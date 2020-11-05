import { Injectable } from '@angular/core';
import { TablesModel } from '../models/tables.model';
import { FormsModel } from '../models/forms.model';

@Injectable({
  providedIn: 'root'
})
export class PinsService {

  constructor() { }
  // getPins(): PinsModel[]{
  //   //return this.http.post(environment.apiurl + 'management/users', '')

  getPins(): TablesModel[]{
    const form_template = [
      {
      data: [
      {
        field: 'id',
        prop: {
        element:'badge',
        value: '1',
        label:'ID',
        validate: {required:true},
        width: 100,
        disabled: true,
        primary: true,
        }
      },
      {
        field: 'field',
        prop: {
        element:'textbox',
        value: 'Light Ha Kusina',
        label:'Name',
        validate: {required:true, minLength: 5},
        width: 100
        }
      },
      {
        field: 'pin_no',
        prop: {
        element:'number',
        value: '1',
        label:'PIN No',
        validate: {required:true,},
        width: 100
        }
      },
      {
        field: 'active',
        prop: {
        element:'toggle',
        value: false,
        label:'Active',
        validate: {required:false},
        width: 100
        }
      },
      {
        field: 'live',
        prop: {
        element:'live',
        value: false,
        label:'Live',
        // validate: {required:true},
        width: 100
        }
      },
      // {
      //   field: 'date_created',
      //   prop: {
      //   element:'textbox',
      //   value: '2020/08/26',
      //   label:'Date Created',
      //   // validate: {required:true,},
      //   width: 100,
      //   disabled: true,
      //   }
      // },
      // {
      //   field: 'date_change',
      //   prop: {
      //   element:'textbox',
      //   value: '2020/08/26',
      //   label:'Date Change',
      //   // validate: {required:true,},
      //   width: 100,
      //   disabled: true,
      //   }
      // },
      // {
      //   field: 'created_by',
      //   prop: {
      //   element:'textbox',
      //   value: 'Rowel',
      //   label:'Created By',
      //   // validate: {required:true,},
      //   width: 100,
      //   disabled: true,
      //   }
      // },
      ]
    },
    {
      data: [
      {
        field: 'id',
        prop: {
        element:'badge',
        value: '2',
        label:'ID',
        validate: {required:true},
        width: 100,
        disabled: true,
        primary: true,
        }
      },
      {
        field: 'field',
        prop: {
        element:'textbox',
        value: 'Light Ha Kusina',
        label:'Name',
        validate: {required:true, minLength: 5},
        width: 100
        }
      },
      {
        field: 'pin_no',
        prop: {
        element:'number',
        value: '2',
        label:'PIN No',
        validate: {required:true,},
        width: 100
        }
      },
      {
        field: 'active',
        prop: {
        element:'toggle',
        value: true,
        label:'Active',
        validate: {required:false},
        width: 100
        }
      },
      {
        field: 'live',
        prop: {
        element:'live',
        value: true,
        label:'Live',
        //validate: {required:false, custom: 'passwordConfirming'},
        width: 100
        }
      },
      // {
      //   field: 'date_created',
      //   prop: {
      //   element:'textbox',
      //   value: '2020/08/26',
      //   label:'Date Created',
      //   // validate: {required:true,},
      //   width: 100,
      //   disabled: true,
      //   }
      // },
      // {
      //   field: 'date_change',
      //   prop: {
      //   element:'textbox',
      //   value: '2020/08/26',
      //   label:'Date Change',
      //   // validate: {required:true,},
      //   width: 100,
      //   disabled: true,
      //   }
      // },
      // {
      //   field: 'created_by',
      //   prop: {
      //   element:'textbox',
      //   value: 'Rowel',
      //   label:'Created By',
      //   // validate: {required:true,},
      //   width: 100,
      //   disabled: true,
      //   }
      // },
      ]
    }
    ]

    return form_template
  }

  addPins(): FormsModel[]{
    const form_template: FormsModel[] = [
      { field: 'field', 
        prop:{
          element:'textbox',
          value: '',
          label:'Name',
          validate: {required:true, minLength: 5},
          width: 100
        }
      },
      {
        field: 'pin_no',
        prop:{
          element:'number',
          value: '',
          label:'PIN No',
          validate: {required:true,},
          width: 100
        }
      },
      {
        field: 'active',
        prop: {
          element:'toggle',
          value: false,
          label:'Active',
          validate: {required:true},
          width: 50
        }
      },
    ]

    return form_template
  }

  updatePins(): FormsModel[]{
    const form_template: FormsModel[] = [
      {
        field: 'id',
        prop: {
        element:'badge',
        value: '2',
        label:'ID',
        validate: {required:true},
        width: 100,
        disabled: true,
        primary: true,
        }
      },
      {
        field: 'field',
        prop: {
        element:'textbox',
        value: 'Light Ha Kusina',
        label:'Name',
        validate: {required:true, minLength: 5},
        width: 100
        }
      },
      {
        field: 'pin_no',
        prop: {
        element:'number',
        value: '2',
        label:'PIN No',
        validate: {required:true,},
        width: 100
        }
      },
      {
        field: 'active',
        prop: {
        element:'toggle',
        value: false,
        label:'Active',
        validate: {required:false},
        width: 20
        }
      },
      {
        field: 'created_by',
        prop: {
        element:'textbox',
        value: 'Rowel',
        label:'Created By',
        // validate: {required:true,},
        width: 80,
        disabled: true,
        }
      },
    ]

    return form_template
  }

  
}
