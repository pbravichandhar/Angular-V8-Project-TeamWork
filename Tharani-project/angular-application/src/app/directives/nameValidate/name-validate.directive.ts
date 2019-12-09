import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appNameValidate]'
})
export class NameValidateDirective {
  element: ElementRef;

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    this.element = elem;
  }

  ngOnInit() {
    // this.element.nativeElement.value = "3"
  }

  @HostListener('keyup') onkeyup() {
    console.log("qwerty", this.element.nativeElement.value.length)
    if (this.element.nativeElement.placeholder == 'Username') {
      if (this.element.nativeElement.value.length < 3 || this.element.nativeElement.value.length > 5) {
        this.element.nativeElement.style.backgroundColor = "red"
      } else {
        this.element.nativeElement.style.backgroundColor = "green"
      }
    }
  }

}
