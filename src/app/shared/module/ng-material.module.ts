import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule
  ]
})
export class NgMaterialModule { }
