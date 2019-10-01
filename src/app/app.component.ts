import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test2';

 
 calc(num: number) {
    if (num < 0)
      return 0;
    return num + 1;
  }
}
