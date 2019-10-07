import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as myGlobals from '../share/global';
import { stringify } from 'querystring';
import { Subject } from 'rxjs';

@Injectable()
export class authService {
    userChanged = new Subject;
    constructor(private http: HttpClient) { }
    userAuthentication(username: string, password: string) {
        const data = new HttpParams().set('username', username).set('password', password).set('grant_type', 'password');
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True' });
        return this.http.post(myGlobals.rootTokenURL + 'Token', data, { headers: reqHeader });
    }

    getLoggedinUser() {
        this.isAdmin().subscribe(x=>{
            this.userChanged.next(x);
        });
        
        return this.http.get(myGlobals.baseURL + 'Test/GetUser');
    }

    setUserInfoOnLocalStorage(user: any) {
        localStorage.setItem('userName', user.UserName);
        localStorage.setItem('firstName', user.FirstName);
        localStorage.setItem('lastName', user.LastName);
        localStorage.setItem('mobile', user.Mobile);
        localStorage.setItem('loggedOn', user.LoggedOn);
    }

    removeUserInfoOnLocalStorage() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('mobile');
        localStorage.removeItem('loggedOn');
    }

    userFullName() {
        let userFullName = '';
        if (localStorage.getItem('firstName') != null && localStorage.getItem('lastName') != null)
            userFullName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
        return userFullName;
    }
    userToken() {
        let userToken = '';
        if (localStorage.getItem('userToken') != null)
            userToken = localStorage.getItem('userToken')
        return userToken;
    }

    isAdmin() {
        return this.http.get(myGlobals.baseURL + 'Test/IsAdmin');
    }
    GetStudentByID(ID) {
        let getUrl = 'Student/GetStudent'
        const params = new HttpParams().set('ID', ID);
        var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.http.post(myGlobals.baseURL + getUrl, params, { headers: reqHeader });
    }
    InsertUser(username: string, password: string) {
        let InsertUserURL = 'http://localhost:6955/Home/InsertUser'
        const myparams = new HttpParams().set('UserName', username).set('Password', password);
        return this.http.post(InsertUserURL, myparams);
    }
    GetUser(username: string, password: string) {
        let InsertUserURL = 'http://localhost:6955/Home/GetUser'
        const myparams = new HttpParams().set('UserName', username).set('Password', password);
        return this.http.post(InsertUserURL, myparams);
    }
}