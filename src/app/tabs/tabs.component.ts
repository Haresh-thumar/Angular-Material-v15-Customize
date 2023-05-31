import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);

}
