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
  newID;
  constructor(private httpService: ServiceService) { }

  ngOnInit() {
    // this.subscription=this.httpService.GetStudent().subscribe((response:any[]) => {
    //   this.Students = response;
    // }); show the students without async
    this.Students = this.httpService.GetStudent(); // show the students with async

  }
  getStudent(ID) {
    this.Student = this.httpService.GetStudentByID(ID);
  }
  ModifyStudent(Name: HTMLInputElement, Age: HTMLInputElement) {
    this.httpService.ModifyStudent(Name.value, Age.value).subscribe((response) => {
      this.newID = response;
      this.Students = this.httpService.GetStudent();
    });
  }
  deleteStudent(ID) {
    this.httpService.DeleteStudent(ID).subscribe((response) => {
      this.Students = this.httpService.GetStudent();
    });
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe(); needed for without async
  }
}
