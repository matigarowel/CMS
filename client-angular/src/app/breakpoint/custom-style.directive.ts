import { Directive } from '@angular/core';
import { StyleDirective } from '@angular/flex-layout';

// const selector = `[ngStyle],
//                   [ngStyle.smobile],
//                   [ngStyle.mobile],
//                   [ngStyle.s.tablet], [ngStyle.l.tablet], [ngStyle.l.tablet.landscape],
//                   [ngStyle.web]
//                   `;

// const inputs = ['ngStyle',
//                 'ngStyle.smobile',
//                 'ngStyle.mobile',
//                 'ngStyle.s.tablet', 'ngStyle.l.tablet', 'ngStyle.l.tablet.landscape',
//                 'ngStyle.web'];

const selector = `[ngStyle],
                  [ngStyle.x-xs],
                  [ngStyle.x-sm],
                  [ngStyle.x-md], 
                  [ngStyle.x-lg], 
                  [ngStyle.x-xl]
                  `;

const inputs = ['ngStyle',
              'ngStyle.x-xs',
              'ngStyle.x-sm',
              'ngStyle.x-md', 
              'ngStyle.x-lg', 
              'ngStyle.x-xl'];
                
@Directive({selector, inputs})
export class CustomStyleDirective extends StyleDirective {
  protected inputs = inputs;
}
