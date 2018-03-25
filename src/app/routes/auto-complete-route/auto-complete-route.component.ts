import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete-route',
  templateUrl: './auto-complete-route.component.html'
})
export class AutoCompleteRouteComponent implements OnInit {
  foundItems = [];

  foundItemsChange(event) {
    this.foundItems = event;
  }
  constructor() { }

  ngOnInit() {
  }

}
