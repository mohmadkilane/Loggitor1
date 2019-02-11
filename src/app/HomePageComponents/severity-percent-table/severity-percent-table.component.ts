import { AppService } from './../../Services/App/app.service';
import { DefectService } from './../../Services/Defect/defect.service';
import { AppComponent } from './../../app.component';
import { AppDetailsPageComponent } from './../../app-details-page/app-details-page.component';
import { Severity } from './../../models/severity.model';
import { SeverityService } from './../../Services/Severity/severity.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogConfig} from '@angular/material';

let mat_header = 'HomePage';
@Component({
  selector: 'app-severity-percent-table',
  templateUrl: './severity-percent-table.component.html',
  styleUrls: ['./severity-percent-table.component.css']
})
export class SeverityPercentTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColums = ['severity', 'defnum' , 'percentage'];
  constructor(private appService: AppService,
    private severityService: SeverityService,
    private defectService: DefectService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.severityService.getSeverity().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }


  clickEvent( severity_: String) {
    this.appService.setServiceUrlCust('https://amdocslogfiles.herokuapp.com/AppPercentApp/' + severity_);
    this.severityService.setServiceUrlCust('https://amdocslogfiles.herokuapp.com/SeverityPercentApp/' + severity_);
    this.defectService.setServiceUrlCust('https://amdocslogfiles.herokuapp.com/ViewDefectsApp/' + severity_);
    mat_header = 'PopUpPage';

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    this.dialog.open(AppDetailsPageComponent, dialogConfig);
  }

  get getMat_header() {
      return mat_header;
  }

}
