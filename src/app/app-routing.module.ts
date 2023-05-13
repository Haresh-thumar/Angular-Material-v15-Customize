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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
