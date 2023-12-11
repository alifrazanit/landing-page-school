import { Directive, Input, ElementRef, Renderer2, OnInit, } from '@angular/core';

@Directive({
  selector: '[appTimeAgo]',
  standalone: true
})
export class TimeAgoDirective implements OnInit {
  @Input() postTime: string = '';
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

   
  ngOnInit(): void {
    console.log('postTime', this.postTime)
  }


}
