import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  Students;
  Student;
  subscription: Subscription;

  constructor(private httpService: ServiceService) { }

  ngOnInit() {
    // this.subscription=this.httpService.GetStudent().subscribe((response:any[]) => {
    //   this.Students = response;
    // }); show the students without async
    this.Students = this.httpService.GetStudent(); // show the students with async
   
  }
  getStudent(ID)
  {
    this.Student = this.httpService.GetStudentByID(ID);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
