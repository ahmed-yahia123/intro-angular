import { animation } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  navBarAnimation: boolean = true;
  @HostListener("document:scroll")
  scroll(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBarAnimation = false
    } else if(document.body.scrollTop <= 0){
      this.navBarAnimation = true
    }
  }
}
