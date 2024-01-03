import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgMaterialModule } from '@shared/module/ng-material.module';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    NgMaterialModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  @Input() isScrolled: boolean = false;
  @Output() goToDivElement = new EventEmitter<string>();


  gotoDiv(section: string) {
    this.goToDivElement.emit(section)
  }
}
