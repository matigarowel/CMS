import { Component, ElementRef, Inject, Input, OnInit, Optional, QueryList, ViewChildren } from '@angular/core';
import { TabsModel } from '../models/tabs.model';
import { Element } from '../enum/element.enum'
import { FormsModel } from '../models/forms.model';
import { FormvalidationService } from '../services/formvalidation.service';
import { BroadcastService } from '../services/broadcast.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { TableComponent } from '../table/table.component';
import { ButtonModel } from '../models/buttons.model';



 
@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {
  breakpoint: boolean = true;
  @Input() formTittle: string = '';
  @Input() formName: string = '';
  @Input() formTemplate: FormsModel[] = [];
  @Input() formConctrolButtons: ButtonModel[] = [];
  @Input() tabTemplate: TabsModel[] = [];

  @ViewChildren(TableComponent) tableComponent: QueryList<TableComponent>
  @ViewChildren(FormComponent) formComponent: QueryList<FormComponent>

  constructor(private formvalidationService: FormvalidationService, 
    private broadcastService: BroadcastService,
    @Optional() public dialogRef: MatDialogRef<FormComponent>, 
    @Optional()  @Inject(MAT_DIALOG_DATA) public data: any, 
    public mediaObserver: MediaObserver,
    public elementRef: ElementRef) {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs' || change.mqAlias.indexOf('x-') > -1) {
        this.breakpoint = false;
        this.dialogRef?.updateSize('100%', '100%')
      } else {
        this.dialogRef?.updateSize(data.width, data.height)
      }
    }); 
  }

  ngOnInit() {
    if(this.data){
      this.formTemplate = this.data.formTemplate;
      this.formTittle= this.data.formTittle;
      this.formConctrolButtons = this.data.formConctrolButtons;
      this.formName = this.data.formName;
      this.tabTemplate = this.data.tabTemplate;
      // this.tableDataSource = this.data.tableDataSource;
    }
  } 

  broadcastEvent(event: string, data: any){
    this.broadcastService.boradcast("boradcast", {data: data, event: event});
  }

}
