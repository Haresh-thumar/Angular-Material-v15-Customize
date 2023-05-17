import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { ChipsComponent } from './chips/chips.component';
import { MatTooltipComponent } from './mat-tooltip/mat-tooltip.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IconComponent } from './icon/icon.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
<<<<<<< HEAD
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
<<<<<<< Updated upstream
=======
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
>>>>>>> 393122a8e5c76179858ef38a74f4a3698a18194f
=======
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'input', component: InputComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'tooltip', component: MatTooltipComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'icon', component: IconComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
<<<<<<< HEAD
  { path: 'slide-toggle', component: SlideToggleComponent },
<<<<<<< Updated upstream
=======
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'snackbar', component: SnackbarComponent },
>>>>>>> 393122a8e5c76179858ef38a74f4a3698a18194f
=======
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'snackbar', component: SnackbarComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
