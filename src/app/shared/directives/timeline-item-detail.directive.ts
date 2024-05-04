import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { WorkExperience } from '../../core/interfaces/work-experience';

@Directive({
  selector: '[appTimelineItemDetail]',
  standalone: true,
})
export class TimelineItemDetailDirective {
  @Input('appTimelineItemDetail') workExperience!: WorkExperience;
  @Input() elemToApplyStyle!: HTMLOListElement;
  constructor() {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: PointerEvent) {
    if (this.elemToApplyStyle && this.workExperience?.isCollapsed) {
      this.elemToApplyStyle.style.maxHeight = `${this.elemToApplyStyle.scrollHeight}px`;
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: PointerEvent) {
    if (this.elemToApplyStyle && this.workExperience?.isCollapsed) {
      this.elemToApplyStyle.style.maxHeight = '0';
    }
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    if (!this.elemToApplyStyle || !this.workExperience) return;
    this.elemToApplyStyle.style.maxHeight = this.workExperience.isCollapsed
      ? `${this.elemToApplyStyle.scrollHeight}px`
      : '0';
    this.workExperience.isCollapsed = !this.workExperience.isCollapsed;
  }
}
