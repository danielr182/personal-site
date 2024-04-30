import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-banner',
  standalone: true,
  imports: [],
  templateUrl: './social-media-banner.component.html',
  styleUrl: './social-media-banner.component.scss'
})
export class VerticalBannerComponent {
  socialItems = [
    {
      icon: 'linkedin.svg',
      link: 'https://www.linkedin.com/in/danielr182',
    },
    {
      icon: 'github.svg',
      link: 'https://github.com/danielr182',
    },
    {
      icon: 'instagram.svg',
      link: 'https://www.instagram.com/danielrodr1guezm',
    },
    {
      icon: 'mail.svg',
      link: 'mailto:daniel.rodriguez182@gmail.com',
    },
  ];
}
