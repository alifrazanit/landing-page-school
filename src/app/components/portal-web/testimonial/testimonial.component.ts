import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TestimonialComponent {
  @ViewChild('testimonialSwiper') swiper!: ElementRef<SwiperContainer>;

  testimonials = [
    {
      image: 'assets/images/testimonial-1.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten
       SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten`
    },
    {
      image: 'assets/images/testimonial-2.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten
       SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten`
    },
    {
      image: 'assets/images/testimonial-3.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten
       SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten`
    },
    {
      image: 'assets/images/testimonial-4.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten
       SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten`
    },
    {
      image: 'assets/images/testimonial-5.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten
       SMA Rimba Madya bagi saya adalah sekolah terbaik yang pernah ada, disana saya
       belajar banyak dari guru-guru yang berkompeten`
    },
  ]

}
