import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authService } from './auth.service';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private authService: authService) { }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        return this.authService.isAdmin().pipe(map((auth) => {
            if (auth) {
                console.log('admin: '+auth);
                return true;
            }
            console.log(auth);
            this.router.navigateByUrl('/');
            return false;
        }));
    }
    
}