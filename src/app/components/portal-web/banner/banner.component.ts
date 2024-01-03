import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgMaterialModule } from '@shared/module/ng-material.module';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgMaterialModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent implements OnInit {
  listBanner = [
    'assets/images/bg-1.jpg',
    'assets/images/bg-2.jpg',
    'assets/images/bg-3.jpg',
    'assets/images/bg-4.jpg',

  ]
  ngOnInit(): void { }
}
