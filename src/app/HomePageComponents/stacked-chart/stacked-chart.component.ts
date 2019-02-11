import { Component, OnInit } from '@angular/core';

import { Def } from '../../models/appPercent';
import { AppPercentService } from '../../Services/Percent/app-percent.service';

@Component({
  selector: 'app-stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.css']
})

export class StackedChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   public barChartLabels: String[] = [];
    public s: string ;
    public defs: Def[];
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




  constructor(private defservice: AppPercentService) {



   }


  ngOnInit() {    this.defservice.getdefStatic().
    subscribe(defss => {
     // this.barChartLabels = [];
      this.defs = defss;
      this.C  = [];
      this.E = [];
    this.W = [];
       this.barChartData = [
        {data: this.C , label: 'critical'},
        {data: this.E, label: 'error'},
        {data: this.W, label: 'warning'}
      ];

      for (let i = 0; i < this.defs.length; i++) {

        this.C[i] = this.defs[i].critical ;
        this.E[i] = this.defs[i].error ;
        this.W[i] = this.defs[i].warning ;

        this.barChartLabels[i] = this.defs[i].name ;



      }

        this.barChartData = [
          {data: this.C, label: 'critical'},
          {data: this.E, label: 'error'},
          {data: this.W, label: 'warning'}
        ];



         console.log(this.W);





    });

  }


}










