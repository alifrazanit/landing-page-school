import { Component } from '@angular/core';
import { HeaderComponent  } from '@components/portal-web/header/header.component';
import { HeaderMenuComponent  } from '@components/portal-web/header-menu/header-menu.component';

@Component({
  selector: 'app-portal-web',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderMenuComponent],
  templateUrl: './portal-web.component.html',
  styleUrl: './portal-web.component.css'
})
export class PortalWebComponent {

}
