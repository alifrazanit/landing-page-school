import { Component, OnInit,AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent implements OnInit, AfterViewInit{
  @ViewChild('newsSwiper') swiper!: ElementRef<SwiperContainer>;
  ngOnInit(): void {

  }

onNext(){
  this.swiper.nativeElement.swiper.slideNext()
}

onPrev(){
  this.swiper.nativeElement.swiper.slidePrev()
}


  ngAfterViewInit(): void {
    console.log('swiper', )
  }

 
}
