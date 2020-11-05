import { HostListener, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class WindowsizeService {

  public windowWidth = window.innerWidth;
  public windowHeigth = window.innerHeight;

  private OnResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.windowHeigth = event.target.innerHeight;
  }
  constructor(private eventManager: EventManager) { 
    this.eventManager.addGlobalEventListener('window', 'resize', this.OnResize.bind(this));
  }
}
