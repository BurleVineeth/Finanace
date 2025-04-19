import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
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
