import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly options: { href: string; label: string }[] = [
    { href: '/#about', label: 'About' },
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#contact', label: 'Contact' },
  ];
}
