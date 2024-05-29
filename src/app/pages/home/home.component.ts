import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ScreenUtils } from '../../core/utils/screen-utils';
import { Section } from '../../core/enums/section.enum';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { VerticalBannerComponent } from '../../core/components/social-media-banner/social-media-banner.component';
import { StarCanvasComponent } from '../../shared/components/star-canvas/star-canvas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    StarCanvasComponent,
    WorkComponent,
    VerticalBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly section = Section;

  goToAboutSection(): void {
    ScreenUtils.goToSpecificElementById(Section.about);
  }
}
