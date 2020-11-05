import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModel } from '../models/forms.model';
import { FormComponent } from '../form/form.component';
import { WindowsizeService } from '../services/windowsize.service';

const form_template: FormsModel[] = [
  { field: 'userfield', 
    prop:{
      element:'textbox',
      value: '',
      label:'Userfield',
      validate: {required:true},
      width: 100
    }
  },
  {
    field: 'password',
    prop:{
      element:'password',
      value: '',
      label:'Password',
      validate: {required:true,},
      width: 100
    }
  },
]

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  //opened = true;
  mode: string = 'side';
  expandHeight: string = '42px';
  collapseHeight: string = '42px';
  displayMode: string = 'flat'
  watcher: Subscription;
  ismobile: boolean = true;

  constructor(public mediaObserver: MediaObserver,public matDialog: MatDialog, public windowsizeService: WindowsizeService) {

    mediaObserver.media$.subscribe((change: MediaChange) => {
      console.log(change.mqAlias)
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs' || change.mqAlias.indexOf('x-') > -1) {
        //this.opened = false;
        this.mode = 'over';  
        this.ismobile = true;
      } else {
        //this.opened = true;
        this.mode = 'side';
        this.ismobile = false;
      }
    });
  }

  ngOnInit(): void {
  }

  loginButton(): void {
    // console.log(this.formTemplate)
    const dialogRef = this.matDialog.open(ModalComponent, {
      maxWidth: this.ismobile? '100vw': '',
      maxHeight: this.ismobile? '100vh': '',
      data:  {
        //title: '',
        formTemplate: form_template,
        submmitButton: {field: 'Log in', color: 'primary', icon: 'login', size: 100},
        width: '450px',
        height: '600px',
        clearButton: null,
        closeButton: null,

      }
    });
  }

}
