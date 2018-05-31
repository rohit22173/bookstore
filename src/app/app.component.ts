import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  author: string;

  constructor() {
    this.title = 'Harry Potter';
    this.author = 'J. K. Rowling';
  }

  public closeModal(event) {

  }
}
