import { Component, OnInit, Inject, Injector } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private inj: Injector, public mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.dialogRef.updateSize('100%', '100%')
      } else {
        this.dialogRef.updateSize(data.width, data.height)
      }
    }); 
  }

  ngOnInit(): void {
  }
  

}
