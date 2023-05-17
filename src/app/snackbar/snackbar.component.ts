import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(private _snackBar: MatSnackBar) { }

  /*-------------------- SnackBar-1 ---------------------*/
  horizontalPosition1: MatSnackBarHorizontalPosition = 'start';
  verticalPosition1: MatSnackBarVerticalPosition = 'top';
  openSnackBar1() {
    this._snackBar.open('snackbar-1', 'close', {
      horizontalPosition: this.horizontalPosition1,
      verticalPosition: this.verticalPosition1,
      duration: 30000,
      panelClass: ['snackbar-1']
    });
  }


  /*-------------------- SnackBar-2 ---------------------*/
  horizontalPosition2: MatSnackBarHorizontalPosition = 'center';
  verticalPosition2: MatSnackBarVerticalPosition = 'top';
  openSnackBar2() {
    this._snackBar.open('snackbar-2', 'close', {
      horizontalPosition: this.horizontalPosition2,
      verticalPosition: this.verticalPosition2,
      duration: 3000,
      panelClass: ['snackbar-2']
    });
  }


  /*-------------------- SnackBar-3 ---------------------*/
  horizontalPosition3: MatSnackBarHorizontalPosition = 'right';
  verticalPosition3: MatSnackBarVerticalPosition = 'top';
  openSnackBar3() {
    this._snackBar.open('snackbar-3', 'close', {
      horizontalPosition: this.horizontalPosition3,
      verticalPosition: this.verticalPosition3,
      duration: 3000,
      panelClass: ['snackbar-3']
    });
  }



  /*-------------------- SnackBar-4 ---------------------*/
  horizontalPosition4: MatSnackBarHorizontalPosition = 'left';
  verticalPosition4: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar4() {
    this._snackBar.open('snackbar-4', 'close', {
      horizontalPosition: this.horizontalPosition4,
      verticalPosition: this.verticalPosition4,
      duration: 3000,
      panelClass: ['snackbar-4']
    });
  }



  /*-------------------- SnackBar-5 ---------------------*/
  horizontalPosition5: MatSnackBarHorizontalPosition = 'center';
  verticalPosition5: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar5() {
    this._snackBar.open('snackbar-5', 'close', {
      horizontalPosition: this.horizontalPosition5,
      verticalPosition: this.verticalPosition5,
      duration: 3000,
      panelClass: ['snackbar-5']
    });
  }



  /*-------------------- SnackBar-6 ---------------------*/
  horizontalPosition6: MatSnackBarHorizontalPosition = 'right';
  verticalPosition6: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar6() {
    this._snackBar.open('snackbar-6', 'close', {
      horizontalPosition: this.horizontalPosition6,
      verticalPosition: this.verticalPosition6,
      duration: 3000,
      panelClass: ['snackbar-6']
    });
  }





}
