import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/users.model'
import { FormsModel } from '../models/forms.model';
import { TablesModel } from '../models/tables.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUsers(): TablesModel[]{
    //return this.http.post(environment.apiurl + 'management/users', '')

  const form_template: TablesModel[] = [
    {
      data:[
        {
          field: 'id',
          prop: {
          element:'badge',
          value: '1',
          label:'ID',
          // validate: {required:true, minLength: 3},
          width: 100,
          disabled: true,
          primary: true,
          }
        },
        {
          field: 'field',
          prop: {
          element:'textbox',
          value: 'Rowel Matiga',
          label:'Name',
          validate: {required:true, minLength: 3},
          width: 100
          }
        },
        {
          field: 'email',
          prop: {
          element:'textbox',
          value: 'matigarowel@yahoo.com',
          label:'Email',
          validate: {required:true, pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'},
          width: 100
          }
        },
        {
          field: 'active',
          prop: {
          element:'toggle',
          value: true,
          label:'Active',
          validate: {required:true},
          width: 100
          }
        },
        // {
        //   field: 'date_change',
        //   prop: {
        //   element:'textbox',
        //   value: '2020/09/09',
        //   label:'Date Change',
        //   // validate: {required:true, custom: 'passwordConfirming'},
        //   width: 100,
        //   disabled: true,
        //   }
        // },
        // {
        //   field: 'date_created',
        //   prop: {
        //   element:'textbox',
        //   value: '2020/09/09',
        //   label:'Date created',
        //   // validate: {required:true, custom: 'passwordConfirming'},
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
        //   // validate: {required:true, custom: 'passwordConfirming'},
        //   width: 100,
        //   disabled: true,
        //   }
        // },
      ]
    }
  ]

  return form_template
  }

  addUsers(): FormsModel[]{
    const form_template: FormsModel[] = [
      {
        field: 'field',
        prop: {
        element:'textbox',
        value: '',
        label:'Name',
        validate: {required:true, minLength: 3},
        width: 100
        }
      },
      {
        field: 'email',
        prop: {
        element:'textbox',
        value: '',
        label:'Email',
        validate: {required:true, pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'},
        width: 100
        }
      },
      {
        field: 'active',
        prop: {
        element:'toggle',
        value: false,
        label:'Is Active',
        width: 100
        }
      },
      {
        field: 'password',
        prop: {
        element:'password',
        value: '',
        label:'Password',
        validate: {required:true, minLength: 4},
        width: 100
        }
      },
      {
        field: 'repassword',
        prop: {
        element:'repassword',
        value: '',
        label:'Re-element Password',
        validate: {required:true, custom: 'passwordConfirming'},
        width: 100
        }
      },
    ]

    return form_template
  }

  updateUsers(): FormsModel[]{
    //return this.http.post(environment.apiurl + 'management/users', '')

  const form_template: FormsModel[] = [
   
        {
          field: 'id',
          prop: {
          element:'badge',
          value: '1',
          label:'ID',
          // validate: {required:true, minLength: 3},
          width: 100,
          disabled: true,
          primary: true,
          }
        },
        {
          field: 'field',
          prop: {
          element:'textbox',
          value: 'Rowel Matiga',
          label:'Name',
          validate: {required:true, minLength: 3},
          width: 100
          }
        },
        {
          field: 'email',
          prop: {
          element:'textbox',
          value: 'matigarowel@yahoo.com',
          label:'Email',
          validate: {required:true, pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'},
          width: 100
          }
        },
        {
          field: 'password',
          prop: {
          element:'password',
          value: 'test',
          label:'Password',
          validate: {required:true, minLength: 4,},
          width: 100
          }
        },
        {
          field: 'repassword',
          prop: {
          element:'repassword',
          value: 'test',
          label:'Re-element Password',
          validate: {required:true, custom: 'passwordConfirming'},
          width: 100
          }
        },
        {
          field: 'active',
          prop: {
          element:'toggle',
          value: true,
          label:'Active',
          validate: {required:true},
          width: 20
          }
        },
        {
          field: 'created_by',
          prop: {
          element:'textbox',
          value: 'Rowel',
          label:'Created By',
          // validate: {required:true, custom: 'passwordConfirming'},
          width: 80,
          disabled: true,
          }
        },
  ]

  return form_template
  

  }

}
