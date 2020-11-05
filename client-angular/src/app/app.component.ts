import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { WindowsizeService } from './services/windowsize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home Automation';
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat'
  watcher: Subscription;

  constructor(public mediaObserver: MediaObserver, public windowsizeService: WindowsizeService) {

    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';  
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }
}
