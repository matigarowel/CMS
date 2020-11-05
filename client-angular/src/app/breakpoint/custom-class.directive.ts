import { Directive } from '@angular/core';
import { ClassDirective } from '@angular/flex-layout';

const selector = `[ngClass],
                  [ngClass.x-xs],
                  [ngClass.x-sm],
                  [ngClass.x-md], 
                  [ngClass.x-lg], 
                  [ngClass.x-xl]
                  `;

const inputs = ['ngClass',
              'ngClass.x-xs',
              'ngClass.x-sm',
              'ngClass.x-md', 
              'ngClass.x-lg', 
              'ngClass.x-xl'];
              
@Directive({selector, inputs})
export class CustomClassDirective extends ClassDirective {
  protected inputs = inputs;
}
