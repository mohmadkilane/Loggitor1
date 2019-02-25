import { Component, ViewChild, Inject, Input } from '@angular/core';
import {formatDate, DOCUMENT } from '@angular/common';
import {MatSidenav} from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'loggetor';
  public NowDate: Date = new Date();
   constructor() {
    setInterval(() => {
      this.NowDate = new Date();
    }, 1);
}

LogURL() {
  window.location.href = 'https://loggitor1.herokuapp.com/src/';
}


openNav() {
  document.getElementById('mySidenav').style.width = '100px';
  document.getElementById('main').style.marginLeft = '100px';
  document.getElementById('main').style.opacity = '0.5';
  document.getElementById('main2').style.marginLeft = '100px';
  document.getElementById('main2').style.opacity = '0.5';
}
 closeNav() {
  document.getElementById('mySidenav').style.width = 'auto';
  document.getElementById('main').style.marginLeft = 'auto';
  document.getElementById('main').style.opacity = '1';
  document.getElementById('main2').style.marginLeft = 'auto';
  document.getElementById('main2').style.opacity = '1';
}
close() {
  this.sidenav.close();
}

AdminURL() {
  window.location.href = 'https://admin-users.herokuapp.com/users';
}
LoggitorURL() {
  window.location.href = 'https://loggitor1.herokuapp.com/src/';
}
ActionURL() {
  window.location.href = 'https://loggitor-fe.herokuapp.com/home';
}

refreshHref(){

}
}


