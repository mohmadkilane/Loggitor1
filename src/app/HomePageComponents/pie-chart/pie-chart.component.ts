
import { Def } from '../../models/appPercent';
import { AppPercentService } from '../../Services/Percent/app-percent.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    public pieChartLabels: string[];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: String = 'pie';
    public defs: Def[];

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
    constructor(private defservice: AppPercentService) {}
    ngOnInit() {
      this.defservice.getdef().
      subscribe(defss => {

        this.defs = defss;

  this.pieChartLabels = [];

        for (let i = 0; i < this.defs.length; i++) {
          this.pieChartLabels[i] = this.defs[i].name ;
          this.pieChartData[i] = this.defs[i].defnum ;
        }


      });
    }
  }




