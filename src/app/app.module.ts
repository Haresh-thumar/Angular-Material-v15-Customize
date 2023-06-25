import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeComponent } from './badge/badge.component';
import { RouterModule } from '@angular/router';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RadioComponent } from './radio/radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input/input.component';
import { ChipsComponent } from './chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipComponent } from './mat-tooltip/mat-tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconComponent } from './icon/icon.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { DialogComponent, DialogComponentContent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExpensionPanelComponent } from './expension-panel/expension-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DividerComponent } from './divider/divider.component';
import { MatDividerModule } from '@angular/material/divider';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HorizontalStapperComponent } from './horizontal-stapper/horizontal-stapper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonComponent,
    CardsComponent,
    CheckboxComponent,
    RadioComponent,
    InputComponent,
    ChipsComponent,
    MatTooltipComponent,
    ToolbarComponent,
    IconComponent,
    ProgressSpinnerComponent,
    SlideToggleComponent,
    ProgressBarComponent,
    SnackbarComponent,
    ProgressBarComponent,
    SnackbarComponent,
    TabsComponent,
    SidenavComponent,
    SliderComponent,
    DialogComponent,
    DialogComponentContent,
    ExpensionPanelComponent,
    DividerComponent,
    TableComponent,
    HorizontalStapperComponent,
    VerticalStepperComponent,
    BottomSheetComponent,
    ButtonToggleComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatSliderModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
