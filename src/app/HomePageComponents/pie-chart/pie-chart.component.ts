import { AppService } from './../../Services/App/app.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  public datasource ;
  public pieChartLabels: string[] = ['BLM Cust', 'CGN Core', 'BLM Core', 'CGN Cust'];
 public pieChartData: number[] = [300, 213, 78, 145];
  public pieChartType: String = 'pie';
  constructor(private appService: AppService  ) {}
  ngOnInit() {
    this.appService.getChart().subscribe(results => {

        if (!results) {
        return;
      }

     // this.pieChartData[0] = (results1[0].defnum);
    // public pieChartData:number[] = [300];//, 500, 100];
     // this.pieChartType = 'pie';
  }); }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
