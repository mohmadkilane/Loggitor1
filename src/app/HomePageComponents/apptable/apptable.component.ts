import { SeverityPercentTableComponent } from './../severity-percent-table/severity-percent-table.component';
import { Severity } from './../../models/severity.model';
import { AppPage } from './../../../../e2e/src/app.po';
import { PieChartComponent } from './../pie-chart/pie-chart.component';
import { DefectService } from './../../Services/Defect/defect.service';
import { SeverityService } from './../../Services/Severity/severity.service';
import { AppService } from './../../Services/App/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AppDetailsPageComponent } from './../../app-details-page/app-details-page.component';

let mat_header = 'HomePage';

@Component({
  selector: 'app-apptable',
  templateUrl: './apptable.component.html',
  styleUrls: ['./apptable.component.css']
})
export class ApptableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColums = ['name', 'defnum' , 'percentage'];

  constructor(private appService: AppService,
    private severityService: SeverityService,
    private defectService: DefectService,
    private dialog: MatDialog,
    private pieChartComponent: PieChartComponent,
   // private severityPercentTableComponent: SeverityPercentTableComponent
   ) {
    }

    ngOnInit() {
    this.appService.getAppModel().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }

  clickEvent( appName: String) {
   // this.severityPercentTableComponent.setPubUpPage('HomePage');
    // SeverityPercentTableComponent.setPubUpPage('HomePage');
    this.appService.setServiceUrlCust('https://amdocslogfiles.herokuapp.com/AppPercentApp/' + appName);
    this.severityService.setServiceUrlCust('https://amdocslogfiles.herokuapp.com/SeverityPercentApp/' + appName);
    this.defectService.setServiceUrlCust('https://amdocslogfiles.herokuapp.com/ViewDefectsApp/' + appName + '/5/1');
    // this. 'https://amdocslogfiles.herokuapp.com/AppPercentSeverity/Error';
    mat_header = 'ErrorCode';

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    this.dialog.open(AppDetailsPageComponent, dialogConfig);
  }

  get getMat_header() {
      return mat_header;
  }

  setMat_Header(mat_header_: string) {
    mat_header = mat_header_;
  }

}
