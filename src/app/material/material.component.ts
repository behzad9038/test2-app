import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
  selected: boolean;
}
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  checked = false;
  userName = "ali";
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak', selected: false },
    { value: 'pizza-1', viewValue: 'Pizza', selected: false },
    { value: 'tacos-2', viewValue: 'Tacos', selected: false }
  ];
  minDate = new Date(2019, 9, 10);
  maxDate = new Date(2019, 10, 10)
  constructor() { }

  ngOnInit() {
  }

}
