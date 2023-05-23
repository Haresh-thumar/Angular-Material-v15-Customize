import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss']
})
export class VerticalStepperComponent {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formbuilder.group({
      field1: ['', Validators.required]
    });

    this.secondFormGroup = this._formbuilder.group({
      field2: ['', Validators.required]
    });
  }

}
