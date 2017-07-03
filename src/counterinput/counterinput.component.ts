import { Component, Input, forwardRef,OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,NG_VALIDATORS, FormControl } from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
  return function validateCounterRange(c: FormControl) {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue,
        min: minValue
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err: null;
  }
}


@Component({
  selector: 'counter-input',
  template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    },
    { 
      provide:  NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
   
  ]

})


export class CounterInputComponent implements ControlValueAccessor,OnInit {

  @Input()
  counterValue = 0;

   @Input()
  counterRangeMax;

  @Input()
  counterRangeMin;


  increment() {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }

  writeValue(value: any) {
    if (value !== undefined) {
       this.counterValue = value;
    }

  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}




validateFn:Function;

  ngOnInit() {
    this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  ngOnChanges(changes) {
    if (changes.counterRangeMin || changes.counterRangeMax) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

}  