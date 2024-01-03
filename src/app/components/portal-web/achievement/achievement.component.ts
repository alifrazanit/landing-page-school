import { Component } from '@angular/core';
import { NgMaterialModule } from '@shared/module/ng-material.module';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [NgMaterialModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent {
  images: any[] = [
    {
      image: 'assets/images/achievement-1.jpg',
      cols: 3, rows: 1
    },
    {
      image: 'assets/images/achievement-2.jpg',
      cols: 1, rows: 2,
    },
    {
      image: 'assets/images/achievement-4.jpg',
      cols: 1, rows: 1,
    },
    {
      image: 'assets/images/achievement-3.jpg',
      cols: 2, rows: 1,
    },
  ]
}
