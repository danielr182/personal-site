import { AfterViewInit, Component } from '@angular/core';
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
export class HomeComponent implements AfterViewInit {
  readonly section = Section;

  ngAfterViewInit(): void {
    this.setScrollObserver();
  }

  goToAboutSection(): void {
    ScreenUtils.goToSpecificElementById(Section.about);
  }

  private setScrollObserver() {
    const faders = document.querySelectorAll('.scroll-fade-in');
    const appearOptions: IntersectionObserverInit = {
      rootMargin: '-120px 0px -120px 0px'
    };
    const appearOnScroll = new IntersectionObserver(
      (entries: IntersectionObserverEntry[], appearOnScroll: IntersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions,
    );

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }
}
