import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../main.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(){
    console.log(__API_ENDPOINT__);
  }
}
