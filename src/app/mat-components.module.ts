import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
  // imports: [
  //   //   NoopAnimationsModule, if this line would be enabled all material animation will be disabled
  //   MatButtonModule,
  //   MatCheckboxModule,
  //   MatRadioModule,
  //   MatSelectModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatDatepickerModule,
  //   MatNativeDateModule,
  //   MatIconModule,
  //   MatChipsModule,
  //   MatProgressSpinnerModule,
  //   MatTooltipModule,
  //   MatTabsModule,
  //   MatDialogModule,
  // ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class MatComponentsModule { }
