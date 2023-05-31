import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(private dialog: MatDialog) { }

  /*------------ Verticallly & Horizontally Center Dialog ------------*/
  openDialog() {
    this.dialog.open(DialogComponentContent)
  }

  /*------------ Top-Right Position Dialog ------------*/
  openDialog2() {
    this.dialog.open(DialogComponentContent, {
      position: { right: '10px', top: '10px' }
    })
  }

  /*------------ Top-Left Position Dialog ------------*/
  openDialog3() {
    this.dialog.open(DialogComponentContent, {
      position: { left: '10px', top: '10px' }
    })
  }

  /*------------ Top-Center Position Dialog ------------*/
  openDialog4() {
    this.dialog.open(DialogComponentContent, {
      position: { top: '10px' }
    })
  }

  /*------------ Bottom-Right Position Dialog ------------*/
  openDialog5() {
    this.dialog.open(DialogComponentContent, {
      position: { right: '10px', bottom: '10px' }
    })
  }

  /*------------ Bottom-Left Position Dialog ------------*/
  openDialog6() {
    this.dialog.open(DialogComponentContent, {
      position: { left: '10px', bottom: '10px' }
    })
  }

  /*------------ Bottom-Center Position Dialog ------------*/
  openDialog7() {
    this.dialog.open(DialogComponentContent, {
      position: { bottom: '10px' }
    })
  }

  /*------------ Right Position Dialog ------------*/
  openDialog8() {
    this.dialog.open(DialogComponentContent, {
      position: { right: '10px' }
    })
  }

  /*------------ Left Position Dialog ------------*/
  openDialog9() {
    this.dialog.open(DialogComponentContent, {
      position: { left: '10px' }
    })
  }

  /*------------ Set Dialog box Height & Width ------------*/
  openDialog10() {
    this.dialog.open(DialogComponentContent, {
      width: '300px',
      height: '300px'
    })
  }

}







@Component({
  selector: 'dialog-component',
  styles: [''],
  template: `
  <h2 mat-dialog-title>Install Angular</h2>
    <mat-dialog-content class="mat-typography">
      <p>Learn one way to build applications with Angular and reuse your code and abilities to build
        apps for any deployment target. For web, mobile web, native mobile and native desktop. Learn one way to build applications with Angular and reuse your code and abilities to build
        apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-raised-button mat-dialog-close color="warn">Cancel</button>
      <button mat-raised-button [mat-dialog-close]="true" cdkFocusInitial color="primary">Install</button>
    </mat-dialog-actions>
  `,
})

export class DialogComponentContent {

}