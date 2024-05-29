import { Component } from '@angular/core';
import { MyWork } from '../../../core/interfaces/my-work';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  private readonly difrutiUrl = 'https://difruti.com/';
  private readonly expensegerUrl = 'https://income-expense-app-danielr182s-projects.vercel.app/';
  private readonly spotiUrl = 'https://spoti-danielr182s-projects.vercel.app/';
  readonly myWorks: MyWork[] = [
    {
      description: `This website allows health lovers to order food preparations made from fruits. It allows people to 
        see the catalog of fruits, toppings, select and order preparations by calculating their price.`,
      image: 'difruti.png',
      links: [
        {
          icon: 'external-link.svg',
          url: this.difrutiUrl,
        },
      ],
      name: 'Difruti',
      technologies: ['Angular', 'Bootstrap', 'WhatsApp API', 'Mailchimp'],
      url: this.difrutiUrl,
    },
    {
      description: `This website allows users to track income and expenses. It has a login feature through Firebase. The data is stored in cloud firestore. 
        The app has internationalization, allowing users to select between English and Spanish.`,
      image: 'expenseger.png',
      links: [
        {
          icon: 'github.svg',
          url: 'https://github.com/danielr182/incomeExpenseApp/',
        },
        {
          icon: 'external-link.svg',
          url: this.expensegerUrl,
        },
      ],
      name: 'Expenseger',
      technologies: ['Angular', 'Internationalization', 'NgRx', 'Bootstrap', 'Firebase', 'Chart.js'],
      url: this.expensegerUrl,
    },
    {
      description: `This website allows users to see the new releases in spotify. 
        Users can also search for a specific artist and check out their top tracks, as well as listen to their preview.`,
      image: 'spoti-app.png',
      links: [
        {
          icon: 'github.svg',
          url: 'https://github.com/danielr182/curso-Angular/tree/master/04-spotiapp/',
        },
        {
          icon: 'external-link.svg',
          url: this.spotiUrl,
        },
      ],
      name: 'SpotiApp',
      technologies: ['Angular', 'Spotify API', 'RxJS', 'SCSS'],
      url: this.spotiUrl,
    },
  ];
}
