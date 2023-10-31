import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrollFunction(): void {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      (document.getElementById('navbar') as HTMLElement).style.opacity = '0.8';
    } else {
      (document.getElementById('navbar') as HTMLElement).style.opacity = '1';
    }
  }

  constructor() {
    window.onscroll = (): void => {
      this.scrollFunction();
    };
  }
}
