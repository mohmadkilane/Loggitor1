import { AppService } from './../../Services/App/app.service';
import { AppModel } from './../../models/Apps.model';

import { AppPercentService } from '../../Services/Percent/app-percent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    public pieChartLabels: String[];
    public pieChartData: number[] = [0, 0, 0];
    public pieChartType: String = 'pie';
    public appModels: AppModel[];

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
    constructor(private defservice: AppService) {}
    ngOnInit() {

      this.defservice.getAppModel().
      subscribe(BackAppModels => {

        this.appModels = BackAppModels;
        this.pieChartLabels = [];

          for (let i = 0; i < this.appModels.length; i++) {
            if (this.appModels[i].name != null) {
              this.pieChartLabels[i] = this.appModels[i].name ;
            } else {
              this.pieChartLabels[i] = this.appModels[i].errorCode ;
            }
            this.pieChartData[i] = this.appModels[i].defnum ;
          }
      });
    }

  }




