import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Def } from '../../models/appPercent';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppPercentService {

  constructor(private http: HttpClient) { }

  private dataUrl = 'https://amdocslogfiles.herokuapp.com/AppPercent';
  private staticUrl = '../../../weekly.json';
  getdef (): Observable<Def[]> {

    return this.http.get<Def[]>
    (this.dataUrl);

   }

   getdefStatic (): Observable<Def[]> {

    return this.http.get<Def[]>
    (this.dataUrl);

   }





}
