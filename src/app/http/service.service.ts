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
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(myGlobals.baseURL + getUrl, params, { headers: reqHeader });
  }
  ModifyStudent(Name, Age) {
    let getUrl = 'Student/ModifyStudent'
    const params = new HttpParams().set('Name', Name).set('Age', Age);
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(myGlobals.baseURL + getUrl, params, { headers: reqHeader });
  }
  DeleteStudent(ID)
  {
    let getUrl = 'Student/DeleteStudent'
    const params = new HttpParams().set('ID', ID);
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(myGlobals.baseURL + getUrl, params, { headers: reqHeader });
  }
}
