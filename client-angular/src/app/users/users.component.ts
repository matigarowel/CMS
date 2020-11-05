import { Component, OnInit } from '@angular/core';
import { FormsModel } from '../models/forms.model';
import { TablesModel } from '../models/tables.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  rowID(id){
    // console.log(id);
  }

  usersDataSource: TablesModel[] = this.usersService.getUsers();
  usersAddTemplate: FormsModel[] = this.usersService.addUsers();
  usersUpdateTemplate: FormsModel[] = this.usersService.updateUsers();

}
