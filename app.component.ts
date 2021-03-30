import { Component } from '@angular/core';

// Constant
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name1 = "romeo";
  name2 = "julia";
  get score() {
    let letters = (this.name1 + this.name2).toUpperCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    return sum % 100;
  }
  list = stationList;
}

