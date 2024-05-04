import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly skills: { icon: string; label: string }[] = [
    {
      icon: 'javascript.svg',
      label: 'Javascript',
    },
    {
      icon: 'typescript.svg',
      label: 'Typescript',
    },
    {
      icon: 'html.svg',
      label: 'HTML5',
    },
    {
      icon: 'css.svg',
      label: 'CSS3',
    },
    {
      icon: 'angular.svg',
      label: 'Angular',
    },
    {
      icon: 'jasmine.svg',
      label: 'Jasmine',
    },
    {
      icon: 'git.svg',
      label: 'Git',
    },
    {
      icon: 'sass.svg',
      label: 'SASS',
    },
    {
      icon: 'bootstrap.svg',
      label: 'Bootstrap',
    },
    {
      icon: 'tailwind-css.svg',
      label: 'Tailwind',
    },
  ];
}
