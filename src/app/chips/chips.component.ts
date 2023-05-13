import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {


  /*-----------------------------------------------------------------------------
                                Chips with input
  -----------------------------------------------------------------------------*/
  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();
  //   // Add our fruit
  //   if (value) {
  //     this.fruits.push({ name: value });
  //   }
  //   // Clear the input value
  //   event.chipInput!.clear();
  // }
  // remove(fruit: Fruit): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }
  // edit(fruit: Fruit, event: MatChipEditedEvent) {
  //   const value = event.value.trim();
  //   // Remove fruit if it no longer has a name
  //   if (!value) {
  //     this.remove(fruit);
  //     return;
  //   }
  //   // Edit existing fruit
  //   const index = this.fruits.indexOf(fruit);
  //   if (index >= 0) {
  //     this.fruits[index].name = value;
  //   }
  // }
  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
  formControl = new FormControl(['angular']);

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }




}


// export interface Fruit {
//   name: string;
// }