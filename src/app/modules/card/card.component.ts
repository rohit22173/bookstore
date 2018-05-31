import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: 'card.component.html' ,
  style: ['card.component.css']
})
export class CardComponent {
  @Input() title: string;
  @Input() author: string;
  @Input() description: string;
  @Output() onClick = new EventEmitter();
  constructor() {
  }
}
