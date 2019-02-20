import { Defect } from './../../models/defect.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class DefectService {
 // private serviceUrl = '../../assets/mockData/datademo1.JSON';
 // private serviceUrl = 'https://amdocslogs.herokuapp.com/ViewDefects'; // Ahmad najar
  private serviceUrl = 'https://amdocslogfiles.herokuapp.com/ViewDefects/15/1'; // mahmoud darwesh
  private BaseUrl = 'https://amdocslogfiles.herokuapp.com/ViewDefects/';
  // httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private http: HttpClient ) { }
  getDefect(page: Number , pageSize: Number ): Observable<Defect[]> {
    return this.http.get<Defect[]>(this.BaseUrl + pageSize + '/' + page);
  }

  setServiceUrlCust(urlCost: string) {
    // this.serviceUrlCust = urlCost;
    this.serviceUrl = urlCost;
  }
  // updateRole(row): Observable<any> {
  //   const url = `${this.BaseUrl + 'editDefect'}/${row}`;
  //   return this.http.put(url, row, this.httpOptions);
  // }
  populateForm(row) {

  row.set({
      SeqId: row.seqID,
      name: row.appName,
      type: row.appType,
      code: row.defCode,
      severity: row.severity
    });
  }
}
