import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  bySevWkData;
  CriticalPer = [];  WarningPer = [];  ErrorPer = [];  AllPer = [];
  CriticalTotal = [];  WarningTotal = [];  ErrorTotal = [];  Total = [];
  // public ookk = false;
  public weeklyChartLabels: string[] = ['WEEK1', 'WEEK2', 'WEEK3', 'WEEK4', 'WEEK5', 'WEEK6'];
  public weeklyChartData: any = [
      { data: [67.8, 10.5, 14, 95, 33, 26.7],
        per: ['17%', '20%', '15%', '8%', '33%', '26%'],
        label: 'Critical'
      },
      { data: [20.7, 39.5, 70, 19.6, 45, 60],
        per: ['20%', '5%', '48%', '17%', '50%', '45%'],
        label: 'Warning'
      },
      { data: [11.4, 60, 16, 34.3, 25, 18.6],
        per: ['13%', '66%', '5%', '71%', '83%', '34%'],
        label: 'Error'}
    ];

  public percentage = [
    { data: ['17%', '20%', '15%', '8%', '33%', '26%']},
    { data: ['20%', '5%', '48%', '17%', '50%', '45%']},
    { data: ['13%', '66%', '5%', '71%', '83%', '34%']}
  ];


  public weeklyChartOptions: any = {
    scales: {
      xAxes: [{ stacked: true}],
      yAxes: [{ stacked: true}]
    }
  };

  public weeklyChartType = 'bar';
  public weeklyChartLegend = true;

  public chartClicked(e: any): void {
  //  console.log(e);
  }

 // event on pie chart slice hover
  public chartHovered(e: any): void {
  //  console.log(e);
  }

  public  getRandomColor() {
    const colored = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + colored).slice(6);
  }
/*
  function( tooltipItem, data){
    console.log(data);
    let html = '';
    for (let dataset in data.datasets) {
        html += data.datasets[dataset].label + ': ' + data.datasets[dataset].data[tooltipItem.index] + '%</label><br/>';
    }
    return html;
}

    public getTooltips(tooltipItem: any, data: any) {
    let items;
    for (let i = 0; i < this.weeklyChartLabels.length; i++) {
      items = this.weeklyChartLabels[i] + ' ' + this.percentage[i];
    }
    return items;
  }
*/
////////////////////////////////////////////////////////////////////////
  constructor( ) { }


  ngOnInit() {

  }
}
