import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/auth/auth.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAsmin: boolean;
  constructor(private router: Router, public authService: authService) {

    this.authService.userChanged.subscribe((user: boolean) => {
      this.isAsmin = user;
    });
  }

  ngOnInit() {
    this.authService.isAdmin().subscribe((response: boolean) => {
      this.isAsmin = response;
    },
      err => {
        console.log('error' + err);
      }
    )
  }
  logOut() {
    this.authService.removeUserInfoOnLocalStorage();
    this.router.navigate(['/login']);
  }
}
