import { Component, HostListener } from '@angular/core';
import { Section } from '../../enums/section.enum';
import { ScreenUtils } from '../../utils/screen-utils';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: PointerEvent) {
    const currentScrollPos = window.scrollY;
    this.isNavbarDisplayed = (this.prevScrollpos > currentScrollPos);
    this.prevScrollpos = currentScrollPos;
  }

  prevScrollpos = window.scrollY;
  isNavbarDisplayed = true;
  isSideNavbarCollapsed = true;
  readonly options: { elementId: Section; label: string }[] = [
    { elementId: Section.about, label: 'About' },
    { elementId: Section.experience, label: 'Experience' },
    { elementId: Section.work, label: 'Work' },
    { elementId: Section.contact, label: 'Contact' },
  ];

  gotoSection(elementId: Section = Section.home): void {
    this.setNavbarCollapsed(true);
    ScreenUtils.goToSpecificElementById(elementId);
  }

  onOutsideMenuClick(): void {
    if (!this.isSideNavbarCollapsed) {
      this.setNavbarCollapsed(true);
    }
  }

  setNavbarCollapsed(navbarCollapsed: boolean): void {
    setTimeout(() => {
      this.isSideNavbarCollapsed = navbarCollapsed;
      document.body.style.overflow = this.isSideNavbarCollapsed ? '' : 'hidden';
    }, 0);
  }
}
