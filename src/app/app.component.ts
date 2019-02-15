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
AdminURL(){
  window.location.href = 'https://adminloggitor.herokuapp.com/#home';
}
ActionURL(){
  window.location.href = 'https://loggitor-fe.herokuapp.com/home';
}
LogURL(){
  window.location.href = 'https://loggitor1.herokuapp.com/src/';
}
}

