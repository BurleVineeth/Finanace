import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderLink } from '../../core/models';
import { HeaderLinks } from '../../core/constants';
import { SideNavComponent } from '../side-nav/side-nav.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, SideNavComponent, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public showSideNav: boolean = false;
  public headerLinks: HeaderLink[] = HeaderLinks;
  public currentUrlPath: string = '';

  constructor(
    library: FaIconLibrary,
    private router: Router,
  ) {
    library.addIcons(faBars);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrlPath = event.urlAfterRedirects.split('/')[1] ?? 0;
      }
    });
  }

  public openSideNav() {
    this.showSideNav = true;
  }

  public closeSideNav(event: boolean) {
    if (event) {
      this.showSideNav = false;
    }
  }
}
