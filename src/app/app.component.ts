import { Component } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

b: Book = {Author: 'fdsfds', Date: Date.now, title : 'title'};

}


