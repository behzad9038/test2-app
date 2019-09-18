import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
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
  GetStudentByID(ID) {
    let getUrl = 'Student/GetStudent'
    const params = new HttpParams().set('ID', ID);
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(myGlobals.baseURL + getUrl, params, { headers: reqHeader });
  }
}
