import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { ModalComponent } from '../modal/modal.component';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { FormsModel } from '../models/forms.model';
// import { ColumnsModel } from '../models/columns.model'
// import { FormComponent } from '../form/form.component';
import { SelectionModel } from '@angular/cdk/collections';
import { TablesModel } from '../models/tables.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ButtonModel } from '../models/buttons.model'
import { BroadcastService } from '../services/broadcast.service';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { FormvalidationService } from '../services/formvalidation.service';
import { Element } from '../enum/element.enum'
import { TestMessage } from 'rxjs/internal/testing/TestMessage';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public dialog: MatDialog, 
    public mediaObserver: MediaObserver, 
    private broadcastService: BroadcastService, 
    private formvalidationService: FormvalidationService, 
    private changeDetectorRef: ChangeDetectorRef, 
    private formBuilder: FormBuilder) {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.isMobile = true;  
      } else {
        this.isMobile = false;
      }
    });
   }

  ngOnInit() {  
    this.formGroup = new FormGroup({
      formArray: new FormArray([])
    });

    this.tableDataColumns = this.tableDataSource[0]?.data.map(val=>{
      return val.field
    });

    this.tableDataRow = this.tableDataColumns?.slice();
    this.dataSource = new MatTableDataSource(this.tableDataSource);

    // console.log(this.dataSource)


    this.tableDataSource.map((value)=>{
      this.formArray.push(new FormArray([this.formvalidationService.formGroupValidation(value.data)]).at(0))
    })

    // console.log(this.formArray)
    // console.log(this.tableDataSource[0].data)


    // this.formArray.push(new FormArray(
    //   this.tableDataSource.map((value)=>{
    //     console.log(this.formvalidationService.formGroupValidation(value.data))
    //   return this.formvalidationService.formGroupValidation(value.data)
    //   })
    // ).at(0))

    // console.log(Object.values(this.formArray.value).map(test=>{
    //   return Object.keys(test).map(key=>{
    //     return test[key]
    //   })
    // }))

    // console.log(Object.values(this.formArray.value[0]))

    // console.log(this.tableDataSource[0].data)

    this.dataSource.filterPredicate = (data, filter: string) => {
      const dataStr = Object.values(data.data).map((object,key) => {
        return object.prop.value
      }).join().toLocaleLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    }

  }

  get formArray(): FormArray {
    return <FormArray>this.formGroup.get('formArray');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this.dataSource.sortingDataAccessor = (tablesModel: TablesModel, sortHeaderId: string) => {
      return this.getPropertyByPath(tablesModel, sortHeaderId)
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  getPropertyByPath(tablesModel: TablesModel, pathString: string) {
    var dataStr = tablesModel.data.filter(obj=> obj.field === pathString).map((object)=>{
      return object.prop.value
    }).toString();
    return dataStr
  }

  selectedRow(tablesModel: TablesModel){
    this.hasSelected = !this.hasSelected;
    // if(this.hasSelected){
    //   this.primaryKey = tablesModel.data.filter(obj=> obj.prop.primary === true).map((object)=>{
    //     return object;
    //   });
    // }
  }

  broadcastEvent(event: string){
    this.broadcastService.boradcast("boradcast", {event: event, formsModel: this.primaryKey});
  }

  dataSource: MatTableDataSource<TablesModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  hasSelected: boolean = false;
  primaryKey: FormsModel[] = [];
  isMobile: boolean = true;
  filterValue: string = '';

  selection = new SelectionModel<any>(false, []);
  //Table Config
  @Input() tableName: string = '';
  @Input() tableOptions: boolean = false;
  @Input() tableDataSource: TablesModel[] = [];
  tableDataColumns: string[] = [];
  tableDataRow: string[] = [];
  @Input() pageFilter: boolean = true;
  @Input() pageSize: boolean = true;
  @Input() pageSizeOptions: number[] = [5,10,25,100];
  @Input() isEditable: boolean = false;
  @Input() tableWidth: number = 1500;
  formGroup: FormGroup;
  //Controls Config
  @Input() conctrolButtons: ButtonModel[];
  @Input() tableConctrolButtons: ButtonModel[];
  @ViewChild(MatTable,{static:true}) matTable:MatTable<any>;

}
