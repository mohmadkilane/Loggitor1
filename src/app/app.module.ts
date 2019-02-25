import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule,
   MatButtonModule , MatCardModule, MatIconModule } from '@angular/material';
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

import { StackedChartComponent } from './HomePageComponents/stacked-chart/stacked-chart.component';
import { AppDetailsPageComponent } from './app-details-page/app-details-page.component';
import { RouterActionsComponent } from './router-actions/router-actions.component';
import { RouterAdminComponent } from './router-admin/router-admin.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { WeeklyComponent } from './HomePageComponents/weekly/weekly.component';

import { MatSnackBarModule, MatGridListModule, MatFormFieldModule,
  MatRadioModule, MatInputModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule } from '@angular/forms';

 @NgModule({
  declarations: [
    AppComponent,
    DefectLogComponent,
    ApptableComponent,
    SeverityPercentTableComponent,
    PieChartComponent,
    BarChartComponent,
    StackedChartComponent,
    AppDetailsPageComponent,
    RouterActionsComponent,
    RouterAdminComponent,
    EditPopupComponent,
    WeeklyComponent
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
    ChartsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [
    DefectService,
    AppService,
    SeverityService,
    PieChartComponent,
    ApptableComponent,
    SeverityPercentTableComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppDetailsPageComponent,
  EditPopupComponent]
})
export class AppModule { }
