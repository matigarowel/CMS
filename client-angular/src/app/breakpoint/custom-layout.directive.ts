import { Directive } from '@angular/core';
import { LayoutDirective } from '@angular/flex-layout';

// const selector = `[fxLayout],
//                   [fxLayout.smobile],
//                   [fxLayout.mobile],
//                   [fxLayout.s.tablet], [fxLayout.l.tablet], [fxLayout.l.tablet.landscape],
//                   [fxLayout.web]
//                   `;

// const inputs = ['fxLayout',
//                 'fxLayout.smobile',
//                 'fxLayout.mobile',
//                 'fxLayout.s.tablet', 'fxLayout.l.tablet', 'fxLayout.l.tablet.landscape',
//                 'fxLayout.web'];

const selector = `[fxLayout],
                  [fxLayout.x-xs],
                  [fxLayout.x-sm],
                  [fxLayout.x-md], 
                  [fxLayout.x-lg], 
                  [fxLayout.x-xl]
                  `;

const inputs = ['fxLayout',
              'fxLayout.x-xs',
              'fxLayout.x-sm',
              'fxLayout.x-md', 
              'fxLayout.x-lg', 
              'fxLayout.x-xl'];

@Directive({selector, inputs})
export class CustomLayoutDirective extends LayoutDirective {
  protected inputs = inputs;
}