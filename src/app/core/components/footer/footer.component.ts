import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly date = new Date();
  readonly footer = `© ${this.date.getFullYear()} Made by Daniel Rodríguez`;
}
