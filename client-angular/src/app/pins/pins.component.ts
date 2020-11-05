import { Component, Input, OnInit } from '@angular/core';
import { FormsModel } from '../models/forms.model';
import { TablesModel } from '../models/tables.model';
import { PinsService } from '../services/pins.service';
export interface PinsModel {
  pinid: number;
  name: string;
  pin_no: number;
  live: boolean;
}

const ELEMENT_DATA: PinsModel[] = [
  {pinid: 1, name: 'Hydrogen', pin_no: 1, live: true},
  {pinid: 2, name: 'Hydrogen', pin_no: 2, live: true},
  {pinid: 3, name: 'Hydrogen', pin_no: 3, live: false},
  {pinid: 4, name: 'Hydrogen', pin_no: 4, live: true},
  {pinid: 5, name: 'Hydrogen', pin_no: 5, live: false},
  {pinid: 6, name: 'Hydrogen', pin_no: 6, live: true},
];
@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss']
})
export class PinsComponent implements OnInit {

  pinmodels: PinsModel[] = ELEMENT_DATA;

  constructor(private pinsService: PinsService) { }

  ngOnInit(): void {
  }

  @Input() viewType: string = 'table';

  rowID(id: TablesModel){
    // console.log(id);
  }

  onClick(id: TablesModel){
    console.log(id)
  }

  pinsDataSource: TablesModel[] = this.pinsService.getPins();
  pinsAddTemplate: FormsModel[] = this.pinsService.addPins();
  pinsUpdateTemplate: FormsModel[] = this.pinsService.updatePins();

}
