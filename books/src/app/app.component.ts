import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Books About Banking';
  books: Book[] = [];

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    const booksObservable = this.bookservice.getBooks();
    booksObservable.subscribe((booksData: Book[]) => {
      this.books = booksData;
    });
  }
}
