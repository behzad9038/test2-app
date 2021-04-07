import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Subscription } from 'rxjs';
import { Directionality, Direction } from '@angular/cdk/bidi';
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
  private dir: Direction;
  
  constructor(private dialog: MatDialog,directionality: Directionality) { 
    this.dir = directionality.value;
    directionality.change.subscribe(() => {
      this.dir = directionality.value;
   });
  }
  checked = false;
  userName = "ali";
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak', selected: false },
    { value: 'pizza-1', viewValue: 'Pizza', selected: false },
    { value: 'tacos-2', viewValue: 'Tacos', selected: false }
  ];
  minDate = new Date(2019, 9, 10);
  maxDate = new Date(2019, 10, 10)

  openDialog() {
    this.dialog.open(EditDialogComponent,{data:{dialogID:23}}).afterClosed().subscribe(
      response => console.log(response));
  }
  ngOnInit() {
  }

}
