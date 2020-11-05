import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

// const selector = `[fxShow],
//                   [fxShow.smobile],
//                   [fxShow.mobile],
//                   [fxShow.s.tablet], [fxShow.l.tablet], [fxShow.l.tablet.landscape],
//                   [fxShow.web],
//                   [fxHide],
//                   [fxHide.mobile],
//                   [fxHide.s.tablet], [fxHide.l.tablet], [fxHide.l.tablet.landscape],
//                   [fxHide.web]
//                   `;

// const inputs = ['fxShow',
//                 'fxShow.smobile',
//                 'fxShow.mobile',
//                 'fxShow.s.tablet', 'fxShow.l.tablet', 'fxShow.l.tablet.landscape',
//                 'fxShow.web',
//                 'fxHide',
//                 'fxHide.mobile',
//                 'fxHide.s.tablet', 'fxHide.l.tablet', 'fxHide.l.tablet.landscape',
//                 'fxHide.web'];


const selector = `[fxHide],
                  [fxHide.x-xs],
                  [fxHide.x-sm],
                  [fxHide.x-md], 
                  [fxHide.x-lg], 
                  [fxHide.x-xl]
                  `;

const inputs = ['fxHide',
              'fxHide.x-xs',
              'fxHide.x-sm',
              'fxHide.x-md', 
              'fxHide.x-lg', 
              'fxHide.x-xl'];

@Directive({selector, inputs})
export class CustomShowHideDirective extends ShowHideDirective {
  protected inputs = inputs;
}
