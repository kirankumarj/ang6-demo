import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.background = 'lightgray';
  }
}
