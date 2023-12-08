import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent implements OnInit{

  ngOnInit(): void {
  
  }
}
