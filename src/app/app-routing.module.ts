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
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SliderComponent } from './slider/slider.component';
import { DialogComponent } from './dialog/dialog.component';

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
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'dialog', component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
