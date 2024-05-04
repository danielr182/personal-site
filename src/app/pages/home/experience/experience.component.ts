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
        'Upgraded Angular v9 apps to v12',
        "Created web apps to replace the client's legacy ones",
        'Created new features and functionalities in Angular apps (v12)',
        'Created Angular libraries that were used in other Angular apps',
      ],
      company: 'Perficient',
      img: 'perficient.png',
      isCollapsed: true,
      jobTitle: 'Front-end Software Engineer',
      startDate: 'July 2021',
    },
    {
      activities: [
        'Got a promotion from SSR Adv to SR',
        'Designed and proposed a solution to decouple a monolithic Angular app into a microfrontend-based one',
        'Created new features and functionalities in Angular apps (v9)',
      ],
      company: 'Globant',
      img: 'globant.png',
      isCollapsed: true,
      jobTitle: 'Web UI developer',
      startDate: '2019 July',
    },
    {
      activities: [
        'Created new features and functionalities in Angular apps (JS, v2, v5)',
        'Implemented REST services in Java (Spring)',
        'Coached junior web developers on the team',
      ],
      company: 'IBM',
      img: 'ibm.png',
      isCollapsed: true,
      jobTitle: 'Application Developer',
      startDate: 'January 2016',
    },
    {
      activities: [
        'Led functional testing team',
        'Designed and Implemented the software testing process',
        'Planned, executed, and closed software testing projects',
      ],
      company: 'IBM',
      img: 'ibm.png',
      isCollapsed: true,
      jobTitle: 'Test Specialist',
      startDate: '2010 August',
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
