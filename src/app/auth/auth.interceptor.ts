import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True") {
            //alert('No token');
            return next.handle(req.clone());
        }
        if (localStorage.getItem('userToken') != null) {
            //alert('has token');
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
                //Headers:new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(tap(
                
                    succ => { },
                    err => {
                        if (err.status === 401)
                            this.router.navigateByUrl('/signin');
                    }
            ));
        }
        else {
            this.router.navigateByUrl('/signin');
        }
    }
}