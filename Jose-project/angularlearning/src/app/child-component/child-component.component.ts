import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('parentData') public userObject;
  @Output() public chileEvents = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('vvndfklvn', this.userObject);
    this.chileEvents.emit({data: 'sucess'});
  }

}
