import { SharedService } from './../../core/services/shared.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderLink } from '../../core/models';
import { HeaderLinks, ImageUrls } from '../../core/constants';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MatIconModule, SideNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public appLogo = ImageUrls.AppLogo;
  public showSideNav: boolean = false;
  public headerLinks: HeaderLink[] = HeaderLinks;

  private readonly sharedSvc = inject(SharedService);
  constructor() {}

  public identify(index: number, item: HeaderLink) {
    return this.sharedSvc?.identify(index, item);
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
