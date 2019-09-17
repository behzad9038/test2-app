import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as myGlobals from '../share/global';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  GetStudent() {
    let getUrl = 'Student/GetStudent'
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(myGlobals.baseURL + getUrl, { headers: reqHeader });
  }
}
