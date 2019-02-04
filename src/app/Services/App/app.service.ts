import { GetResponse } from './../../GetResponse';
// import { App } from '../../models/Apps.model';
// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { Observable} from 'rxjs/Observable';
import { Pie } from 'src/app/pie_chart';
import { map } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {
//   private serviceUrl = 'https://amdocslogfiles.herokuapp.com/AppPercent';
//   constructor(private http: HttpClient) { }
//   getApp(): Observable<App[]> {
//     return this.http.get<App[]>(this.serviceUrl);
//   }

// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModel } from './../../models/apps.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private serviceUrl = 'https://amdocslogfiles.herokuapp.com/AppPercent';

  constructor(private http: HttpClient) { }
  getChart(): Observable<Pie[] > {
    return this.http.get<GetResponse>(this.serviceUrl).pipe(
      map(responce => responce.pie));
  }
  getAppModel(): Observable<AppModel[]> {
    return this.http.get<AppModel[]>(this.serviceUrl);
  }

}
