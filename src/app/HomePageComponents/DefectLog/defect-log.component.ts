import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable , MatTableDataSource , MatPaginator } from '@angular/material';
import {DefectService } from '../../Services/Defect/defect.service' ;
@Component({
  selector: 'app-defect-log',
  templateUrl: './defect-log.component.html',
  styleUrls: ['./defect-log.component.css']
})
export class DefectLogComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource ;
  displayedColumns = ['SeqId', 'App', 'Code', 'Severity'];
  constructor(private defectService: DefectService  ) {}

  ngOnInit() {
    this.defectService.getDefect().subscribe(results1 => {
      if (!results1) {
        return;
      }
      this.dataSource = new MatTableDataSource(results1) ;
      console.log(this.dataSource);

       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
    });
  }

}
