import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  icon = 'menu';

  title = 'four3rds';

  toggleMenu() {
    this.sidenav.toggle();
  }

}
