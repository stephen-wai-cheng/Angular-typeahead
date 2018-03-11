import { TestBed, inject, async } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

fdescribe('BooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksService,
        HttpClient,
        HttpHandler
      ]
    });
  });

  it('should retrieve books', async(inject([BooksService], (service: BooksService) => {
    let books = [];

    service.getBooks().subscribe(
      response => {
        books = response;
        console.log('Got books');
      },
      error => console.log(`error ${error}`),
      () => console.log('complete')
    );

  })));

  it('show do deep copy', () => {
    const source = {
      name: 'Stephen',
      address: {
        houseNumber: '37b',
        street: 'Parkside Avenue',
        town: 'Mount Pleasant',
        state: 'WA'
      }
    };

    const target = JSON.parse(JSON.stringify(source));

    expect(target.address.houseNumber).toBe('37b');

    target.address.houseNumber = '1A';

    expect(target.address.houseNumber).toBe('1A');
    expect(source.address.houseNumber).toBe('37b');

  });
});
