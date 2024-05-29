import { Component } from '@angular/core';
import { Section } from '../../../core/enums/section.enum';
import { ScreenUtils } from '../../../core/utils/screen-utils';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  gotoHome(): void {
    ScreenUtils.goToSpecificElementById(Section.home);
  }
}
