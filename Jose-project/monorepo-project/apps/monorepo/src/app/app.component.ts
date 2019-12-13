import { Component } from '@angular/core';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monorepo'

  clickme2 (e) {
    e.preventdefault()
  }
 
  clickme1 () {
    console.log('1')
  }
}
