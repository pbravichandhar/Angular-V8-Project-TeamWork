import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEmailValidation]'
})

export class EmailValidationDirective {

  @Input() name: string;
  @Input() value: string;
  constructor(
    private el: ElementRef,
  ) {
  }

  @HostListener('blur') onBlur() {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const element = document.getElementById('user-email-error');
    const node = document.createElement('P');
    if (!re.test(String(this.value)) && element === null) {
      const textnode = document.createTextNode('Please enter the valid email');
      node.style.cssText = 'color: red';
      node.setAttribute('id', 'user-email-error');
      node.appendChild(textnode);
      this.el.nativeElement.after(node);
    } else  if (re.test(String(this.value)) && element) {
      element.remove && element.remove();
    }
  }
}
