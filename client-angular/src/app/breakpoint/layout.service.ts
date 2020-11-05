import { Injectable, ChangeDetectorRef } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { Subscription } from 'rxjs';

@Injectable()
export class LayoutService {
  private mediaSuffix: string;
  private mqAlias: string;
  private subscription: Subscription;

  constructor(private media: MediaObserver) { }

  public get mediaSuffix$(): string {
    return this.mediaSuffix;
  }

  public get mqAlias$(): string {
    return this.mqAlias;
  }

  public subscribe(changeDetector: ChangeDetectorRef): void {
    this.subscription = this.media.media$.subscribe(change => this.updateLayout(changeDetector, change));
  }

  public unsubscribe(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateLayout(changeDetector: ChangeDetectorRef, change: MediaChange): void {
    if (change) {
      console.log(change);
      this.mediaSuffix = change.suffix;
      this.mqAlias = change.mqAlias;
    }

    changeDetector.detectChanges();
  }
}