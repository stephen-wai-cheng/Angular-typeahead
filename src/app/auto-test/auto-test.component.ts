import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-test',
  templateUrl: './auto-test.component.html',
  styleUrls: ['./auto-test.component.css']
})
export class AutoTestComponent implements OnInit {
  foundItems = [];

  foundItemsChange(event) {
    this.foundItems = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
