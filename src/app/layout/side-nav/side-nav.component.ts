import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HeaderLink } from '../../core/models';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoutes, SideNavAnimation } from '../../core/constants';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  animations: [SideNavAnimation],
})
export class SideNavComponent {
  @Input({ required: true }) headerLinks!: HeaderLink[];
  @Input({ required: true }) showSideNav!: boolean;
  @Output() showSideNavChange = new EventEmitter<boolean>();

  private readonly router = inject(Router);
  private readonly sharedSvc = inject(SharedService);
  constructor() {}

  public identify(index: number, item: HeaderLink) {
    return this.sharedSvc?.identify(index, item);
  }

  public closeSideNav() {
    this.showSideNavChange.emit(true);
  }

  public navigate(headerLink: HeaderLink) {
    this.router.navigate([AppRoutes.Home, headerLink.link]);
    this.closeSideNav();
  }

  public navigateToHome() {
    this.router.navigate(['']);
    this.closeSideNav();
  }
}
