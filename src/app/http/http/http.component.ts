import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  Students: any[];
  constructor(private httpService: ServiceService) { }

  ngOnInit() {
    this.httpService.GetStudent().subscribe((response:any[]) => {
      this.Students = response;
    });
  }

}
