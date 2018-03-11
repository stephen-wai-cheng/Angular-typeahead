import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BooksService {

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/services/books.json');
  }

  constructor(private http: HttpClient) { }
}

interface Book {
  author: string;
  tile: string;
}
