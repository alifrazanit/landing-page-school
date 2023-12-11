import { Component , CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TestimonialComponent {
  @ViewChild('testimonialSwiper') swiper!: ElementRef<SwiperContainer>;

}
