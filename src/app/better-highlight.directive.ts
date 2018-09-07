import { Directive, ElementRef, Renderer2, OnInit, RendererStyleFlags2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') eleBackGroundColor = 'lightblue';
  flag: RendererStyleFlags2;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'lightgray', this.flag);
  }

  @HostListener('mouseenter') mouseenter() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'lightblue', this.flag);
    this.eleBackGroundColor = 'pink';
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink', this.flag);
    this.eleBackGroundColor = 'lightgray';
  }
}
