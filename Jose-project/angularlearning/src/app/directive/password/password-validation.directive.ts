import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordValidation]'
})
export class PasswordValidationDirective {

  @Input() name: string;
  @Input() value: string;
  constructor(
    private el: ElementRef,
  ) {
  }

  @HostListener('blur') onFocus() {
    const node = document.createElement('P');
    const passRe = /^[A-Za-z0-9]\w{7,14}$/;
    const element = document.getElementById('user-pass-error');
    if (!passRe.test(String(this.value)) && element === null) {
      const textnode = document.createTextNode('Please enter the valid password');
      node.style.cssText = 'color: red';
      node.setAttribute('id', 'user-pass-error');
      node.appendChild(textnode);
      this.el.nativeElement.after(node);
    } else  if (passRe.test(String(this.value))) {
      element.remove && element.remove();
    }
  }

}
