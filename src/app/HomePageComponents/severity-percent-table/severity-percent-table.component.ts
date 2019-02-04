import { Severity } from './../../models/severity.model';
import { SeverityService } from './../../Services/Severity/severity.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-severity-percent-table',
  templateUrl: './severity-percent-table.component.html',
  styleUrls: ['./severity-percent-table.component.css']
})
export class SeverityPercentTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColums = ['severity', 'defnum' , 'percentage'];
  constructor(private severityService: SeverityService) { }

  ngOnInit() {
    this.severityService.getSeverity().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }

}
