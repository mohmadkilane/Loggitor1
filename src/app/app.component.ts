import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loggetor';
  public NowDate: Date = new Date();
   constructor() {
    setInterval(() => {
      this.NowDate = new Date();
    }, 1);
}
}

