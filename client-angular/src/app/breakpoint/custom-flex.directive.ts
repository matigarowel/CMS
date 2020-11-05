import { Directive } from '@angular/core';
import { FlexDirective } from '@angular/flex-layout';

// const selector = `[fxFlex],
//                   [fxFlex.smobile],
//                   [fxFlex.mobile],
//                   [fxFlex.s.tablet], [fxFlex.l.tablet], [fxFlex.l.tablet.landscape],
//                   [fxFlex.web]
//                   `;

// const inputs = ['fxFlex',
//                 'fxFlex.mobile',
//                 'fxFlex.smobile',
//                 'fxFlex.s.tablet', 'fxFlex.l.tablet', 'fxFlex.l.tablet.landscape',
//                 'fxFlex.web'];

const selector = `[fxFlex],
                  [fxFlex.x-xs],
                  [fxFlex.x-sm],
                  [fxFlex.x-md], 
                  [fxFlex.x-lg], 
                  [fxFlex.x-xl]
                  `;

const inputs = ['fxFlex',
              'fxFlex.x-xs',
              'fxFlex.x-sm',
              'fxFlex.x-md', 
              'fxFlex.x-lg', 
              'fxFlex.x-xl'];
                
@Directive({selector, inputs})
export class CustomFlexDirective extends FlexDirective {
  protected inputs = inputs;
}