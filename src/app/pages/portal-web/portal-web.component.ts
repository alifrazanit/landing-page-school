import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent  } from '@components/portal-web/header/header.component';
import { HeaderMenuComponent  } from '@components/portal-web/header-menu/header-menu.component';
import { BannerComponent } from '@components/portal-web/banner/banner.component';
import { AboutUsComponent } from '@components/portal-web/about-us/about-us.component';
import { NewsComponent } from '@components/portal-web/news/news.component';


@Component({
  selector: 'app-portal-web',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderMenuComponent,
    BannerComponent,
    AboutUsComponent,
    NewsComponent],
  templateUrl: './portal-web.component.html',
  styleUrl: './portal-web.component.css'
})
export class PortalWebComponent implements OnInit {
  isScrolled: boolean = false;
  targetBanner: number = 0;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.targetBanner = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > this.targetBanner + 20;
  }
}
