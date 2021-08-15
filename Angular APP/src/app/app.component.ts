import { Component } from '@angular/core';

@Component({
  selector: 'N-root',
  template: `
    <nav class='navbar navbar-expand navbar-dark bg-dark'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/fileupload'>File upload</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/viewfiles'>View Files</a></li>
          <!--<li><a class='nav-link' routerLinkActive='active' routerLink='/blockly'>Blockly</a></li>-->
        </ul>
        
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Nehanth World';
}
