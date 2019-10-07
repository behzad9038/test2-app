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
  showProgressBar: boolean = false;
  loginError: boolean = false;
  constructor(private authService: authService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.authService.userToken())
      this.router.navigate(['/']);
  }
  login() {
    this.showProgressBar = true;
    this.loginError = false;
    this.authService.userAuthentication(this.username, this.password).subscribe((x: any) => {
      console.log(x);
      localStorage.setItem('userToken', x.access_token);
      this.authService.getLoggedinUser().subscribe((user: any) => {
        this.authService.setUserInfoOnLocalStorage(user);
        this.showProgressBar = false;
      })
      let returnURL = this.activatedRoute.snapshot.queryParams['returnURL'];
      this.router.navigate([returnURL || '/']);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status === 400)
          this.loginError = true;
        this.showProgressBar = false;
      });

  }

}
