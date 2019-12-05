import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUsernameValidation]'
})
export class UsernameValidationDirective {

  @Input() name: string;
  @Input() value: string;
  constructor(
    private el: ElementRef,
  ) {
  }

  @HostListener('blur') onBlur() {
    const node = document.createElement('P');
    const element = document.getElementById('user-name-error');
    if ((this.value.length > 6 || !this.value) && element === null) {
      const textnode = document.createTextNode('your username must be lessthan 6 letter');
      node.style.cssText = 'color: red';
      node.setAttribute('id', 'user-name-error');
      node.appendChild(textnode);
      this.el.nativeElement.after(node);
    } else if (this.value.length < 7 && element) {
      element.remove && element.remove();
    }
  }

}
