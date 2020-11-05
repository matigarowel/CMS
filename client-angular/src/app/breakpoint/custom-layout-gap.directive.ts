import { Directive } from '@angular/core';
import { LayoutGapDirective } from '@angular/flex-layout';

// const selector = `[fxLayoutGap],
//                   [fxLayoutGap.smobile],
//                   [fxLayoutGap.mobile],
//                   [fxLayoutGap.s.tablet], [fxLayoutGap.l.tablet], [fxLayoutGap.l.tablet.landscape],
//                   [fxLayoutGap.web]
//                   `;

// const inputs = ['fxLayoutGap',
//                 'fxLayoutGap.smobile',
//                 'fxLayoutGap.mobile',
//                 'fxLayoutGap.s.tablet', 'fxLayoutGap.l.tablet', 'fxLayoutGap.l.tablet.landscape',
//                 'fxLayoutGap.web'];

const selector = `[fxLayoutGap],
                  [fxLayoutGap.x-xs],
                  [fxLayoutGap.x-sm],
                  [fxLayoutGap.x-md], 
                  [fxLayoutGap.x-lg], 
                  [fxLayoutGap.x-xl]
                  `;

const inputs = ['fxLayoutGap',
              'fxLayoutGap.x-xs',
              'fxLayoutGap.x-sm',
              'fxLayoutGap.x-md', 
              'fxLayoutGap.x-lg', 
              'fxLayoutGap.x-xl'];

@Directive({selector, inputs})
export class CustomLayoutGapDirective extends LayoutGapDirective {
  protected inputs = inputs;
}