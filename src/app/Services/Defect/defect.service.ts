import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Defect } from '../../models/defect.model';
@Injectable({
  providedIn: 'root'
})
export class DefectService {
 // private serviceUrl = '../../assets/mockData/datademo1.JSON';
 // private serviceUrl = 'https://amdocslogs.herokuapp.com/ViewDefects'; // Ahmad najar
  private serviceUrl = 'https://amdocslogfiles.herokuapp.com/ViewDefects/pages/1'; // mahmoud darwesh
  constructor(private http: HttpClient ) { }
  getDefect(): Observable<Defect[]> {
    return this.http.get<Defect[]>(this.serviceUrl);
  }
}
