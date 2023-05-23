import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-horizontal-stapper',
  templateUrl: './horizontal-stapper.component.html',
  styleUrls: ['./horizontal-stapper.component.scss']
})
export class HorizontalStapperComponent {

  /*-------------- Example-1 ---------------*/
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*------------------- Example-1 -------------------*/
    this.firstFormGroup = this._formBuilder.group({
      field1: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      field1: ['', Validators.required]
    });
  }
  

}
