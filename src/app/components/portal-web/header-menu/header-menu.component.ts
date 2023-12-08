import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  timedOutCloser: any;
  mouseEnter(trigger: MatMenuTrigger) {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu()
    // setTimeout(() => trigger.openMenu(), 200);
  }
  mouseLeave(trigger: MatMenuTrigger) {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    }, 20000);
    // setTimeout(() => trigger.closeMenu(), 200);
  }
}
