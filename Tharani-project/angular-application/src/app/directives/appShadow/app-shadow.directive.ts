import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({ selector: '[appShadow]' })
export class ShadowDirective implements OnInit {

  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;

  element: ElementRef;

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    console.log("sfchgsy", elem)
    elem.nativeElement.style.textColor = "Red"
    this.element = elem;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "Yellow"
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('yellow');
  }

  public highLight(color) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}