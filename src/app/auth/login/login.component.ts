import { Component, OnInit } from '@angular/core';
import { authService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  showSpinner: true;
  constructor(private authService: authService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  login() {
    this.authService.userAuthentication(this.username, this.password).subscribe((x: any) => {
      console.log(x);
      localStorage.setItem('userToken', x.access_token);
      this.authService.getLoggedinUser().subscribe((user: any) => {
        this.authService.setUserInfoOnLocalStorage(user);
      })
      let returnURL = this.activatedRoute.snapshot.queryParams['returnURL'];
      this.router.navigate([returnURL || '/']);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });

  }

}
