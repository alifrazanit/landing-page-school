import { Component } from '@angular/core';
import { HeaderComponent  } from '@components/portal-web/header/header.component';
import { HeaderMenuComponent  } from '@components/portal-web/header-menu/header-menu.component';
import { BannerComponent } from '@components/portal-web/banner/banner.component';


@Component({
  selector: 'app-portal-web',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderMenuComponent,
    BannerComponent],
  templateUrl: './portal-web.component.html',
  styleUrl: './portal-web.component.css'
})
export class PortalWebComponent {

}
