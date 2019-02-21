import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { GetResponse } from './../GetResponse';
import { Defect } from './../models/defect.model';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { MatDialogConfig} from '@angular/material/dialog';
import { CdkStepLabel } from '@angular/cdk/stepper';
import { puts } from 'util';
import { paramKey } from 'blocking-proxy/built/lib/webdriver_commands';


@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  appName: string;
  severity: string;
  description: string;
  solution: string;
  toDo: string;
  IDid: string;
  keyValue: Map<any, any>;
  constructor( public dialog: MatDialog,
    @Inject (MAT_DIALOG_DATA) data) {
    this.keyValue = data;
    this.appName = this.keyValue['appName'] + ['  '] + this.keyValue['appType'];
    this.description = this.keyValue['description'];
    this.solution = this.keyValue['solname'];
    this.severity = this.keyValue['severity'];
    this.IDid = this.keyValue['idid'];
    this.toDo = this.keyValue['ido'];
     }

  ngOnInit() {

  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EditPopupComponent, {
  //     width: '2500px',
  //     // data: {name: this.name, animal: this.animal}
  //   });
  // }
}
