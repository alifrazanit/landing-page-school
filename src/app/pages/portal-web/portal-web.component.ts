import { Component, HostListener, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent  } from '@components/portal-web/header/header.component';
import { HeaderMenuComponent  } from '@components/portal-web/header-menu/header-menu.component';
import { BannerComponent } from '@components/portal-web/banner/banner.component';
import { AboutUsComponent } from '@components/portal-web/about-us/about-us.component';
import { NewsComponent } from '@components/portal-web/news/news.component';
import { AchievementComponent } from '@components/portal-web/achievement/achievement.component';
import { TestimonialComponent } from '@components/portal-web/testimonial/testimonial.component';


@Component({
  selector: 'app-portal-web',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderMenuComponent,
    BannerComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent,
    TestimonialComponent],
  templateUrl: './portal-web.component.html',
  styleUrl: './portal-web.component.css'
})
export class PortalWebComponent implements OnInit {
  @ViewChild('banner', { static: false }) bannerDiv!: ElementRef;

  BannerIsScrolled: boolean = false;
  AboutIsScrolled:  boolean = false;

  targetBanner: number = 0;
  targetAbout: number = 0;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.targetBanner = this.el.nativeElement.querySelector('#bannerId').offsetTop;
    this.targetAbout = this.el.nativeElement.querySelector('#aboutId').offsetTop;

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.BannerIsScrolled = window.scrollY > this.targetBanner;
    this.AboutIsScrolled = window.scrollY > (this.targetAbout - 250);
  }

  goTo(e:any){
    console.log('e', e)
  }
}
