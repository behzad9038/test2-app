import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  dialogID: any;
  constructor(@Inject(MAT_DIALOG_DATA) data:any) {
    this.dialogID = data.dialogID;
    console.log(data);
  }

  ngOnInit() {

  }

}
