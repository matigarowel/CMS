import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { colorSets } from '@swimlane/ngx-charts';
import { from } from 'rxjs';
import { FormComponent } from 'src/app/form/form.component';
import { ManagmentComponent } from 'src/app/managment/managment.component';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ButtonModel } from 'src/app/models/buttons.model';
import { FormsModel } from 'src/app/models/forms.model';
import { TablesModel } from 'src/app/models/tables.model';
import { TabsModel } from 'src/app/models/tabs.model';
import { FormvalidationService } from 'src/app/services/formvalidation.service';
import { TableComponent } from 'src/app/table/table.component';
import { Element } from '../../enum/element.enum'
import { BroadcastService } from '../../services/broadcast.service'

const table_template: TablesModel[] = [
 {
   data:[
    {
      field: 'id',
      prop: {
        primary: true,
      element: Element.badge,
      value: 1,
      label:'ID',
      width: 5,
      }
    },
     {
       field: 'datefiled',
       prop: {
        element: Element.textbox,
       value: '2020/09/28',
       label:'Date Filed',
       }
     },
     {
       field: 'otdate',
       prop: {
       value: '2020/09/28',
       label:'OT Date',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'fromto',
       prop: {
       value: '06:00 PM - 10:45 PM',
       label:'From - To',
       }
     },
     {
       field: 'remark',
       prop: {
       value: 'WF',
       label:'Remark',
       }
     },
     {
       field: 'reason',
       prop: {
        element: Element.textbox,
       value: 'Test',
       label:'Reason',
       }
     },
     {
       field: 'status',
       prop: {
       element: Element.button,
       value: 'Pending',
       label:'Status',
       }
     },
     {
       field: 'active',
       prop: {
       element: Element.toggle,
       value: true,
       label:'Active',
       }
     },
   ]
 },
 {
  data:[
   {
     field: 'id',
     prop: {
       primary: true,
    //  element: Element.badge,
     value: 1,
     label:'ID',
     width: 5,
     }
   },
    {
      field: 'datefiled',
      prop: {
       element: Element.textbox,
       validate:{required: true},
      value: '2020/09/28',
      label:'Date Filed',
      }
    },
    {
      field: 'otdate',
      prop: {
      value: '2020/09/28',
      label:'OT Date',
      }
    },
    {
      field: 'sched',
      prop: {
      value: '07:00 AM - 04:45 PM',
      label:'Schedule',
      }
    },
    {
      field: 'fromto',
      prop: {
      value: '06:00 PM - 10:45 PM',
      label:'From - To',
      }
    },
    {
      field: 'remark',
      prop: {
      value: 'WF',
      label:'Remark',
      }
    },
    {
      field: 'reason',
      prop: {
        element: Element.textbox,
      value: 'Test1',
      label:'Reason',
      }
    },
    {
      field: 'status',
      prop: {
      element: Element.button,
      value: 'Pending',
      label:'Status',
      }
    },
    {
      field: 'active',
      prop: {
      element: Element.toggle,
      value: true,
      label:'Active',
      }
    },
  ]
},
]

const tab_template: TabsModel[] = [
  {
  name: 'Detail',
  group:'detail',
  color: 'accent',
  icon: 'article',
  // form:[
  //   {
  //     field: 'id',
  //     prop: {
  //       primary: true,
  //       width: 20,
  //     value: 1,
  //     label:'ID',
  //     }
  //   },
  //    {
  //      field: 'datefiled',
  //      prop: {
  //       width: 30,
  //       element: Element.textbox,
  //       disabled: true,
  //      value: '09/29/2020',
  //      label:'Date Filed',
  //      }
  //    },
  //    {
  //      field: 'otdate',
  //      prop: {
  //       width: 50,
  //       element: Element.date,
  //       // disabled: true,
  //      value: new Date(),
  //      label:'OT Date',
  //      validate: {required: true},
  //      }
  //    },
  //    {
  //      field: 'sched',
  //      prop: {
  //       element: Element.select,
  //       disabled: true,
  //      value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
  //      label:'Schedule',
  //      validate: {required: true},
  //      }
  //    },
  //    {
  //      field: 'fromto',
  //      prop: {
  //       // disabled: true,
  //      value: '06:00 PM - 10:45 PM',
  //      label:'From - To',
  //      validate: {required: true},
  //      }
  //    },
  //    {
  //      field: 'remark',
  //      prop: {
  //       disabled: true,
  //      value: 'WF',
  //      label:'Remark',
  //      }
  //    },
  //    {
  //      field: 'reason',
  //      prop: {
  //       // disabled: true,
  //      value: 'Test',
  //      label:'Reason',
  //      validate: {required: true},
  //      width: 80,
  //      }
  //    },
  //   ],
  table: [
    {
      data:[
       {
         field: 'id',
         prop: {
           primary: true,
        //  element: Element.badge,
         value: 1,
         label:'ID',
         width: 5,
         }
       },
        {
          field: 'scheds',
          prop: {
            element: Element.select,
            value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
          label:'Schedule',
          disabled: true,
          width: 70,
          }
        },
        {
          field: 'datefiled',
          prop: {
            element: Element.date,
          value: new Date(),
          label:'Date Filed',
          validate:{required: true},
          width: 70,
          }
        },
        {
          field: 'otdate',
          prop: {
            element: Element.date,
          value: new Date(),
          label:'OT Date',
          validate:{required: true},
          width: 50,
          }
        },
        {
          field: 'sched',
          prop: {
            element: Element.select,
            value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
          label:'Schedule',
          width: 70,
          }
        },
        {
          field: 'reason',
          prop: {
            element: Element.textbox,
            // disabled: true,
          value: 'Test',
          label:'Reason',
          validate:{required: true,minLength:3},
          width: 120,
          }
        },
      ]
    },
   ],
  buttons:[
    {name: '', icon: 'search', event: 'onSave'},
    {name: '', icon: 'add', event: 'onAddrow'},
    {name: '', icon: 'close', event: 'onReset'},
  ],
},
{
  name: 'Other Detail',
  group:'otherdetail',
  form:[
    {
      field: 'id',
      prop: {
        primary: true,
        width: 20,
      value: 1,
      label:'ID',
      }
    },
     {
       field: 'datefiled',
       prop: {
        width: 30,
        element: Element.textbox,
        disabled: true,
       value: '09/29/2020',
       label:'Date Filed',
       }
     },
     {
       field: 'otdate',
       prop: {
        width: 50,
        element: Element.date,
        // disabled: true,
       value: new Date(),
       label:'OT Date',
       validate: {required: true},
       }
     },
     {
       field: 'sched',
       prop: {
        element: Element.select,
        disabled: true,
       value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
       label:'Schedule',
       validate: {required: true},
       }
     },
     {
       field: 'fromto',
       prop: {
        // disabled: true,
       value: '06:00 PM - 10:45 PM',
       label:'From - To',
       validate: {required: true},
       }
     },
     {
       field: 'remark',
       prop: {
        disabled: true,
       value: 'WF',
       label:'Remark',
       }
     },
    ]
},
{
  name: 'Hello Romelito',
  group:'romelito',
  form:[
    {
      field: 'id',
      prop: {
        primary: true,
        width: 20,
      value: 1,
      label:'ID',
      }
    },
     {
       field: 'datefiled',
       prop: {
        width: 30,
        element: Element.textbox,
        disabled: true,
       value: '09/29/2020',
       label:'Date Filed',
       }
     },
     {
       field: 'otdate',
       prop: {
        width: 50,
        element: Element.date,
        // disabled: true,
       value: new Date(),
       label:'OT Date',
       validate: {required: true},
       }
     },
     {
       field: 'sched',
       prop: {
        element: Element.select,
        disabled: true,
       value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
       label:'Schedule',
       validate: {required: true},
       }
     },
     {
       field: 'fromto',
       prop: {
        // disabled: true,
       value: '06:00 PM - 10:45 PM',
       label:'From - To',
       validate: {required: true},
       }
     },
     {
       field: 'remark',
       prop: {
        disabled: true,
       value: 'WF',
       label:'Remark',
       }
     },
    ],
    table: [
      {
        data:[
         {
           field: 'id',
           prop: {
             primary: true,
          //  element: Element.badge,
           value: 1,
           label:'ID',
           width: 5,
           }
         },
          {
            field: 'scheds',
            prop: {
              element: Element.select,
              value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
            label:'Schedule',
            disabled: true,
            width: 70,
            }
          },
          {
            field: 'datefiled',
            prop: {
              element: Element.date,
            value: new Date(),
            label:'Date Filed',
            validate:{required: true},
            width: 70,
            }
          },
          {
            field: 'otdate',
            prop: {
              element: Element.date,
            value: new Date(),
            label:'OT Date',
            validate:{required: true},
            width: 50,
            }
          },
          {
            field: 'sched',
            prop: {
              element: Element.select,
              value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
            label:'Schedule',
            width: 70,
            }
          },
          {
            field: 'reason',
            prop: {
              element: Element.textbox,
              // disabled: true,
            value: 'Test',
            label:'Reason',
            validate:{required: true,minLength:3},
            width: 120,
            }
          },
        ]
      },
     ],
    buttons:[
      {name: '', icon: 'search', event: 'onSave'},
      {name: '', icon: 'add', event: 'onAddrow'},
      {name: '', icon: 'close', event: 'onReset'},
    ],
}
 ]

const form_template: FormsModel[] = [
  {
    field: 'id',
    prop: {
      primary: true,
      element: Element.textbox,
      width: 20,
    value: 1,
    label:'ID',
    }
  },
   {
     field: 'datefiled',
     prop: {
      width: 20,
      element: Element.textbox,
      disabled: true,
     value: '09/29/2020',
     label:'Date Filed',
     }
   },
   {
     field: 'otdate',
     prop: {
      width: 60,
      element: Element.date,
      // disabled: true,
     value: new Date(),
     label:'OT Date',
     validate: {required: true},
     }
   },
   {
     field: 'sched',
     prop: {
      element: Element.select,
      disabled: true,
     value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
     label:'Schedule',
     validate: {required: true},
     }
   },
   {
     field: 'fromto',
     prop: {
      // disabled: true,
     value: '06:00 PM - 10:45 PM',
     label:'From - To',
     validate: {required: true},
     }
   },
   {
     field: 'remark',
     prop: {
      disabled: true,
     value: 'WF',
     label:'Remark',
     }
   },
   {
     field: 'reason',
     prop: {
      // disabled: true,
     value: 'Test',
     label:'Reason',
     validate: {required: true},
     width: 80,
     }
   },
   {
     field: 'active',
     prop: {
      // disabled: true,
     element: Element.toggle,
     value: true,
     label:'Active',  
     width: 20,
     }
   },
  //  {
  //    field: 'status',
  //    prop: {
  //    element: Element.button,
  //    value: 'Pending',
  //    label:'Status',
  //    }
  //  },
 ]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog, 
    public mediaObserver: MediaObserver, 
    private broadcastService: BroadcastService, 
    private snackBar: MatSnackBar, 
    private formvalidationService: FormvalidationService) { 
    this.broadcastService.subscribe("boradcast", (data) => { data.event? this[data.event](data.data): console.log("No function was called") });
    
    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.ismobile = true;  
      } else {
        this.ismobile = false;
      }
    });
  }

  ngOnInit(): void {
    
  }

  
  @ViewChildren(ManagmentComponent) managmentComponent: QueryList<ManagmentComponent>
  // @ViewChildren(TableComponent) tableComponent: QueryList<TableComponent>


  tableDataSource: TablesModel[] = table_template
  tabTemplate: TabsModel[] = tab_template;
  addTemplate: FormsModel[] = form_template
  updateTemplate: FormsModel[] = form_template
  // pageSizeOptions: number[] = [5,10,25,100]
  addButton: ButtonModel = {name: 'Apply', color: 'primary', icon: 'note_add'}
  updateButton: ButtonModel = {name: 'Update', color: 'accent', icon: 'edit'}
  removeButton: ButtonModel = {name: 'Cancel', color: 'warn', icon: 'cancel'}
  formConctrolButtons: ButtonModel[] = [
    {name: 'Submmit', color: 'primary', icon: 'save', size: 100, event: 'onSave'},
    {name: 'Reset', color: 'accent', icon: 'clear_all', size: 100, event: 'onReset'},
  ];
  tableConctrolButtons: ButtonModel[] = [
    {name: 'Add', color: 'primary', icon: 'note_add', size: 100, event: 'onAdd'},
    {name: 'Update', color: 'accent', icon: 'edit', size: 100, event: 'onUpdate', sensitive: true},
    {name: 'Remove', color: 'warn', icon: 'cancel', size: 100, event: 'onRemove', sensitive: true},
  ];
  ismobile: boolean = false;
  dialogRef: MatDialogRef<ManagmentComponent>;

 onSave(){

   if(this.managmentComponent){
    this.managmentComponent.forEach(c=>{
      c.formComponent.forEach(c=>{
        c.formGroup.markAllAsTouched();
        if(c.formGroup.valid){
          console.log(c.formGroup.getRawValue());
        }
      })

    });
   }

  let valid: boolean = true;
  if(this.dialogRef){

    this.dialogRef.componentInstance.formComponent.forEach(c=>{
      c.formGroup.markAllAsTouched();
      if(c.formGroup.invalid){
        valid = false;
      }
    });
    this.dialogRef.componentInstance.tableComponent.forEach(c=>{
      c.formGroup.markAllAsTouched();
      if(c.formGroup.invalid){
        valid = false;
      }
    })
  }
  if(valid){
    this.dialogRef.componentInstance.formComponent.forEach(c=>{
      if(c.formName === 'header'){
        console.log(c.formGroup.getRawValue())
      }
      if(c.formName === 'otherdetail'){
        console.log(c.formGroup.getRawValue())
      }
      if(c.formName === 'detail'){
        console.log("test if exist then fire")
        console.log(c.formGroup.getRawValue())
      }
    });
    this.dialogRef.componentInstance.tableComponent.forEach(c=>{
      console.log(c.tableDataSource)
    })
  }
 }

 onAdd(): void {
   this.dialogRef = this.dialog.open(ManagmentComponent, {
    maxWidth: this.ismobile? '100%': '',
    // maxHeight: this.ismobile? '100%': '',
    disableClose: true,
    data:  {
      formTittle: 'New TEST',
      formTemplate: this.addTemplate,
      formConctrolButtons: this.formConctrolButtons,
      width: '700px',
      height: '',
      tableDataSource: this.tableDataSource,
      formName: 'header',
      tabTemplate: this.tabTemplate,
    },
  });
}

onUpdate(formsModel: FormsModel[]): void {
  if(formsModel.length === 0){
    this.snackBar.open('No primary key was set, please contact your IT!', 'close', {
      duration: 5 * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  else{
    this.dialogRef = this.dialog.open(ManagmentComponent, {
      maxWidth: this.ismobile? '100%': '',
      maxHeight: this.ismobile? '100%': '',
      disableClose: true,
      data:  {
        formTittle: 'Update TEST',
        formTemplate: this.updateTemplate,
        formConctrolButtons: this.formConctrolButtons,
        width: '500px',
        height: '',
        formName: 'header',
        tabTemplate: this.tabTemplate,
      }
    });
  }
}

onRemove(): void {    
  
}

onReset(){
  if(this.managmentComponent){
    this.managmentComponent.forEach(m=>{
      m.formComponent.forEach(c=>{
        Object.keys(c.formGroup.controls).forEach(key => {
          if(!c.formGroup.get(key).disabled){
            c.formGroup.get(key).reset()
          }
        });
      });

      m.tableComponent.forEach(c=>{
        Object.keys(c.formGroup.controls).forEach(key => {
          if(!c.formGroup.get(key).disabled){
            c.formGroup.get(key).reset()
          }
        });
      })
      
    });
  }

  if(this.dialogRef){
    this.dialogRef.componentInstance.formComponent.forEach(m=>{
      Object.keys(m.formGroup.controls).forEach(key => {
        if(!m.formGroup.get(key).disabled){
          m.formGroup.get(key).reset()
        }
      });
    });

    this.dialogRef.componentInstance.tableComponent.forEach(m=>{
      m.formArray.controls.forEach(c=>{
        Object.keys(c['controls']).forEach(key=>{
          // console.log(key + '' + c.get(key).disabled)
          if(!c.get(key).disabled){
            c.get(key).reset()
          }
        })
      })
    });
  }
}

selectedRow(formsModel: FormsModel){
  console.log(formsModel)
}

onAddrow(data: any){
  const table_template: TablesModel[] = [
    {
      data:[
        {
          field: 'id',
          prop: {
            primary: true,
          value: 1,
          label:'ID',
          width: 5,
          }
        },
         {
           field: 'scheds',
           prop: {
             element: Element.select,
             value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
           label:'Schedule',
           disabled: true,
           width: 70,
           }
         },
         {
           field: 'datefiled',
           prop: {
             element: Element.date,
           value: new Date(),
           label:'Date Filed',
           validate:{required: true},
           width: 70,
           }
         },
         {
           field: 'otdate',
           prop: {
             element: Element.date,
           value: new Date(),
           label:'OT Date',
           validate:{required: true},
           width: 50,
           }
         },
         {
           field: 'sched',
           prop: {
             element: Element.select,
             value: {selected: '07:00 AM - 04:45 PM', items: ['07:00 AM - 04:45 PM', '06:00 AM - 06:00 PM']},
           label:'Schedule',
           width: 70,
           }
         },
         {
           field: 'reason',
           prop: {
             element: Element.textbox,
             // disabled: true,
           value: '',
           label:'Reason',
           validate:{required: true,minLength:3},
           width: 120,
           }
         },
       ]
    },
   ]

  if(this.dialogRef){
    this.dialogRef.componentInstance.tableComponent.forEach(c=>{
       
      // if(c.tableName === 'detail'){
        c.tableDataSource.push(table_template[0])
        table_template.map((value)=>{
          c.formArray.push(new FormArray([this.formvalidationService.formGroupValidation(value.data)]).at(0))
        })
        c.matTable.renderRows();
      // }
     
    }); 
  }
}

}
