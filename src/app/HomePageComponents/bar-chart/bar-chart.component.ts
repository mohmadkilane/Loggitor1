import { AppService } from './../../Services/App/app.service';

import { AppModel } from '../../models/Apps.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: String[] = [];
  public s: string ;
  public defs: AppModel[];
  public C: any[];    public E: any[];
  public W: any[];

  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;


  public barChartData: any[] = [
  {data: [], label: 'critical'},
  {data: [], label: 'error'},
  {data: [], label: 'warning'}
];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  constructor(private defservice: AppService) {}


  ngOnInit() {    this.defservice.getAppModel().
    subscribe(defss => {
      this.defs = defss;
      this.C  = [];
      this.E = [];
      this.W = [];
       this.barChartData = [
        {data: this.C , label: 'critical'},
        {data: this.E, label: 'error'},
        {data: this.W, label: 'warning'}
      ];

      if (this.defs.length > 0) {

        if (this.defs[0].name == null) {
          let sumCritical: number;
          let sumError: number;
          let sumWarnning: number;
          sumCritical = 0;
          sumError = 0;
          sumWarnning = 0;
          for (let i = 0; i < this.defs.length; i++) {
            sumCritical = sumCritical + this.defs[i].critical;
            sumError = sumError + this.defs[i].error;
            sumWarnning = sumWarnning + this.defs[i].warning ;
          }
          this.C[0] = sumCritical ;
          this.E[0] = sumError ;
          this.W[0] = sumWarnning ;

      } else {
        for (let i = 0; i < this.defs.length; i++) {

          this.C[i] = this.defs[i].critical ;
          this.E[i] = this.defs[i].error ;
          this.W[i] = this.defs[i].warning ;

          this.barChartLabels[i] = this.defs[i].name ;
        }
      }
    }
    });

  }

}
