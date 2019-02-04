import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
// Imports Of services
import { DefectService } from './Services/Defect/defect.service';
import { AppService } from './Services/App/app.service';
import { SeverityService } from './Services/Severity/severity.service';

// imports of the table components
import { ApptableComponent } from './HomePageComponents/apptable/apptable.component';
import { SeverityPercentTableComponent } from './HomePageComponents/severity-percent-table/severity-percent-table.component';
import { DefectLogComponent } from './HomePageComponents/DefectLog/defect-log.component';
import { PieChartComponent } from './HomePageComponents/pie-chart/pie-chart.component';
import { BarChartComponent } from './HomePageComponents/bar-chart/bar-chart.component';

 @NgModule({
  declarations: [
    AppComponent,
    DefectLogComponent,
    ApptableComponent,
    SeverityPercentTableComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatPaginatorModule,
    ChartsModule
  ],
  providers: [
    DefectService,
    AppService,
    SeverityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
