import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneValidate]'
})
export class PhoneValidateDirective {

  element: ElementRef;

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    this.element = elem;
  }

  ngOnInit() {
    // this.element.nativeElement.value = "3"
  }

  @HostListener('keyup') onkeyup() {
    console.log("phone", this.element.nativeElement.value.length)
    if (this.element.nativeElement.placeholder == 'Phone Numbers') {
      const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      if (phonePattern.test(this.element.nativeElement.value)) {
        this.element.nativeElement.style.backgroundColor = "green"
      } else {
        this.element.nativeElement.style.backgroundColor = "red"
      }
    }
  }

}
