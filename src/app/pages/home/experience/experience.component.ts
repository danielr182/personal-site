import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkExperience } from '../../../core/interfaces/work-experience';
import { TimelineItemDetailDirective } from '../../../shared/directives/timeline-item-detail.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineItemDetailDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  isWorkExperienceCollapsed = true;
  readonly workExperiences: WorkExperience[] = [
    {
      activities: [
        'Drove a major code refactoring and modernization initiative to decouple the platform from large third-party dependencies (JQuery, PrototypeJS)',
        "Implemented a stable hybrid application model where newly refactored Angular 18 components are successfully downgraded to seamlessly coexist with the existing legacy codebase (PHP/AngularJS)",
        'Led the technical execution for a core team of 8 Angular developers',
        'Developed and maintained multiple in-house Angular libraries to standardize business logic and reusable components across all products',
      ],
      company: 'Intive',
      img: 'intive.png',
      isCollapsed: true,
      jobTitle: 'Senior Software Engineer',
      startMonth: 'August',
      startYear: '2024',
    },
    {
      activities: [
        'Upgraded Angular v9 apps to v15',
        "Created web apps to replace the client's legacy ones",
        'Created new features and functionalities in Angular apps (v15)',
        'Created Angular libraries that were used in other Angular apps',
        'Performed bug fixes and code reviews'
      ],
      company: 'Perficient',
      img: 'perficient.png',
      isCollapsed: true,
      jobTitle: 'Front-end Software Engineer',
      startMonth: 'July',
      startYear: '2021',
    },
    {
      activities: [
        'Got a promotion from SSR Adv to SR',
        'Designed and proposed a solution to decouple a monolithic Angular app into a microfrontend-based one',
        'Created new features and functionalities in Angular apps (v9)',
        'Performed bug fixes and code reviews',
      ],
      company: 'Globant',
      img: 'globant.png',
      isCollapsed: true,
      jobTitle: 'Web UI developer',
      startMonth: 'July',
      startYear: '2019',
    },
    {
      activities: [
        'Created new features and functionalities in Angular apps (JS, v2, v5)',
        'Implemented REST services in Java (Spring)',
        'Coached junior web developers on the team',
        'Performed bug fixes and code reviews',
      ],
      company: 'IBM',
      img: 'ibm.png',
      isCollapsed: true,
      jobTitle: 'Application Developer',
      startMonth: 'January',
      startYear: '2016',
    },
    {
      activities: [
        'Led functional testing team',
        'Designed and Implemented the software testing process',
        'Planned, executed, and closed software testing projects',
        'Performed bug fixes and code reviews',
      ],
      company: 'IBM',
      img: 'ibm.png',
      isCollapsed: true,
      jobTitle: 'Test Specialist',
      startMonth: 'August',
      startYear: '2010',
    },
  ];

  toogleWorkExperience(workExperience: WorkExperience, el: HTMLOListElement, event: Event): void {
    if (workExperience.isCollapsed) {
      if (event.type === 'mouseenter') {
        el.style.maxHeight = `${el.scrollHeight}px`;
      } else if (event.type === 'mouseleave') {
        el.style.maxHeight = '0';
      }
    }

    if (event.type === 'click') {
      el.style.maxHeight = workExperience.isCollapsed ? `${el.scrollHeight}px` : '0';
      workExperience.isCollapsed = !workExperience.isCollapsed;
    }
  }
}
