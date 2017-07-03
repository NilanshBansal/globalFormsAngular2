import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { createCounterRangeValidator } from '../counterinput/counterinput.component';

@Component({
  selector: 'new-component',
  template: `
    <form [formGroup]="form">
      <counter-input formControlName="counter" counterRangeMax="10" counterRangeMin="0">
      </counter-input>
        
    </form>
    <p *ngIf="!form.valid">Counter is invalid!</p>
    <pre>{{ form.value | json }}</pre>

 

  `
})
export class NewComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   this.form = this.fb.group({
      counter: [5, createCounterRangeValidator(10,0)]
    });
  }
}
