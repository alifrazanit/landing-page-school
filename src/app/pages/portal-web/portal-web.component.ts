import { Component } from '@angular/core';
import { HeaderComponent  } from '@components/portal-web/header/header.component';

@Component({
  selector: 'app-portal-web',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './portal-web.component.html',
  styleUrl: './portal-web.component.css'
})
export class PortalWebComponent {

}
