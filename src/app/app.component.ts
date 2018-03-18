import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  foundItems = ['aa', 'bb'];

  foundItemsChange(event) {
    this.foundItems = event;
  }
}
