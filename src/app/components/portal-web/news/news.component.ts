import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SwiperContainer } from 'swiper/element';
import { TimeAgoDirective } from '@directives/time-ago.directive';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatButtonModule, TimeAgoDirective],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newsSwiper') swiper!: ElementRef<SwiperContainer>;

  listNews = [
    {
      title:"",
      tag:"",
      datePost:"",
      author:"",
    }
  ]

  onNext() {
    this.swiper.nativeElement.swiper.slideNext()
  }
  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev()
  }
}
