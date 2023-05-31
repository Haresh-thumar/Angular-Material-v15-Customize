import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-horizontal-stapper',
  templateUrl: './horizontal-stapper.component.html',
  styleUrls: ['./horizontal-stapper.component.scss']
})
export class HorizontalStapperComponent {  
  
  /*------- Example-1 -------*/
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  /*------- Example-2 -------*/
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;

  /*------- Example-2 -------*/
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;

  constructor(private _formbuilder: FormBuilder){}

 
  ngOnInit(): void {
    /*------- Example-1 -------*/
    this.firstFormGroup = this._formbuilder.group({
      field1: ['', Validators.required]
    });
    this.secondFormGroup = this._formbuilder.group({
      field2: ['', Validators.required],
    });

    /*------- Example-2 -------*/
    this.thirdFormGroup = this._formbuilder.group({
      field3: ['', Validators.required]
    });
    this.fourthFormGroup = this._formbuilder.group({
      field4: ['', Validators.required]
    });

    /*------- Example-3 -------*/
    this.fifthFormGroup = this._formbuilder.group({
      field5: ['', Validators.required]
    });
    this.sixthFormGroup = this._formbuilder.group({
      field6: ['', Validators.required]
    });
  }

  /*------- Go Back-step Edit on Condition --------*/
  formedit: boolean = true;
  formedit2: boolean = true;
  formedit3: boolean = true;

  eadittableForm() {
    this.formedit = !this.formedit;
  }
  eadittableForm2() {
    this.formedit2 = !this.formedit2;
  }
  eadittableForm3() {
    this.formedit3 = !this.formedit3;
  }
  
}
