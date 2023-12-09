import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {

}
