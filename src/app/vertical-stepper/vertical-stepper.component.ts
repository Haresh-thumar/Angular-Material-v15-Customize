import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss']
})
export class VerticalStepperComponent {

  constructor(private _formBuilder: FormBuilder) { }

  /*------- Example -------*/
  seventhFormGroup!: FormGroup;
  eaighthFormGroup!: FormGroup;

  formedit5: boolean = true;

  ngOnInit(): void {
    this.seventhFormGroup = this._formBuilder.group({
      field1: ['', Validators.required]
    });
    this.eaighthFormGroup = this._formBuilder.group({
      field1: ['', Validators.required]
    });
  }


  editableForm5() {
    this.formedit5 = !this.formedit5;
  }

}
