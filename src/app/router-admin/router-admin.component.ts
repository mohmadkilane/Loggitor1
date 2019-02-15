import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-admin',
  templateUrl: './router-admin.component.html',
  styleUrls: ['./router-admin.component.css']
})
export class RouterAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://adminloggitor.herokuapp.com/#home';
  }

}
