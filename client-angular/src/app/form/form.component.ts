import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { FormvalidationService } from '../services/formvalidation.service'
import { FormsModel } from '../models/forms.model'
import { TabsModel } from '../models/tabs.model'
import { ButtonModel } from '../models/buttons.model'
import { Element } from '../enum/element.enum'
import { BroadcastService } from '../services/broadcast.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { TablesModel } from '../models/tables.model';
import { TableComponent } from '../table/table.component';

const tab_template: TabsModel[] = [
  {
  name: 'Detail',
  group:'detail',
  color: 'accent',
  icon: 'article',
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
    ],
  buttons:[
    {name: 'Item Search', icon: 'save', event: 'onSave'},
    {name: 'Add', icon: 'search', event: 'onReset'},
    {name: 'Remove', icon: 'clear_all', event: 'onReset'},
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
}
 ]

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isSubmmited: boolean = false;
  formGroup: FormGroup;
  @Input() formTemplate: FormsModel[] = [];
  @Input() formName: string = '';
  passwordConfirming(c: AbstractControl) {
    let parent = c.parent
    if (parent) {
      let password = parent.get('password').value;
      let confirmPassword = c.value;
      if (password !== confirmPassword) {
        return { mismatch: true };
      }
    }
    return false;

    //return this.formvalidationService.passwordConfirming(c, 'password')
  }
  
  constructor(private formvalidationService: FormvalidationService, private broadcastService: BroadcastService,@Optional() public dialogRef: MatDialogRef<FormComponent>, @Optional()  @Inject(MAT_DIALOG_DATA) public data: any, public mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.dialogRef?.updateSize('100%', '100%')
      } else {
        this.dialogRef?.updateSize(data.width, data.height)
      }
    }); 
  }

  ngOnInit() {
    this.formGroup = this.formvalidationService.formGroupValidation(this.formTemplate)
  } 

  broadcastEvent(event: string){
    this.broadcastService.boradcast("boradcast", {data: this.formGroup.getRawValue(), event: event});
  }

}
