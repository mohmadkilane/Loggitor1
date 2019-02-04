import { AppService } from './../../Services/App/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import { AppModel } from './../../models/Apps.model';

@Component({
  selector: 'app-apptable',
  templateUrl: './apptable.component.html',
  styleUrls: ['./apptable.component.css']
})
export class ApptableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColums = ['name', 'defnum' , 'percentage'];
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.appService.getAppModel().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }
}
