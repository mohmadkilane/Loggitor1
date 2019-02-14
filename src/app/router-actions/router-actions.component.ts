import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-actions',
  templateUrl: './router-actions.component.html',
  styleUrls: ['./router-actions.component.css']
})
export class RouterActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://loggitor-fe.herokuapp.com/home';
  }

}
