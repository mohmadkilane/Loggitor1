import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable , MatTableDataSource , MatPaginator
   , MatButton, MatIcon} from '@angular/material';
import {DefectService } from '../../Services/Defect/defect.service' ;
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-defect-log',
  templateUrl: './defect-log.component.html',
  styleUrls: ['./defect-log.component.css']
})
export class DefectLogComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  private page: any = 1 ;
  dataSource ;
  displayedColumns = ['SeqId', 'App', 'Code', 'Severity'];
  pageSize = 5;
 // LastPageIndex = 1 ;
  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }
  constructor(private defectService: DefectService  ) {}

  ngOnInit() {
    this.getDefect();

  }

getDefect() {
  this.defectService.getDefect(this.page, this.pageSize).subscribe(results1 => {
    if (!results1) {
      return;
    }
    this.dataSource = new MatTableDataSource(results1) ;
    console.log(this.dataSource);
    // console.log(results1.length);

     this.dataSource.sort = this.sort;
   //  this.dataSource.paginator = this.paginator;
  });
}

NextPage() {
  this.page++ ;
  this.defectService.getDefect(this.page , this.pageSize).subscribe(data =>{
    if (!data) {
      return;
    }
    if(data.length === 0) {
      this.page-- ;
    } else {
    console.log(this.page);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  //  this.dataSource.paginator = this.paginator;
    }
  });
}
  PrevPage() {
    if(this.page !== 0 ){
        this.page-- ;
        this.defectService.getDefect(this.page , this.pageSize).subscribe(data => {
          if (!data) {
            return;
          }
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
    //    this.dataSource.paginator = this.paginator;
      });
    }
  }
  FirstPage() {
    if(this.page !== 0 ){
        this.page = 1 ;
        this.defectService.getDefect(this.page , this.pageSize).subscribe(data => {
          if (!data) {
            return;
          }
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
    //    this.dataSource.paginator = this.paginator;
      });
  }
}
  LastPage() {

        this.defectService.getDefect(this.page , this.pageSize).subscribe(data => {
          if(data.length === 0) {
            this.page-- ;
            console.log(this.page);
            this.defectService.getDefect(this.page, this.pageSize).subscribe(data1 => {
              if (!data1) {
                return;
              }
            this.dataSource = new MatTableDataSource(data1);
            this.dataSource.sort = this.sort;
        //    this.dataSource.paginator = this.paginator;
          });
          } else {
            this.page++ ;
            console.log(this.page);
            this.LastPage() ;
      }
    });
}
  SelectPageSize(event: any) {
   this.pageSize = event.target.value;;
    console.log(this.pageSize);

    this.defectService.getDefect(this.page , this.pageSize).subscribe(data => {
      if (!data) {
        return;
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
  //    this.dataSource.paginator = this.paginator;
    });
  }

}
