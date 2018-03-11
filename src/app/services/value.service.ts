import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ValueService {

  constructor() { }

  getValue(): Observable<number> {
    return of(147);
  }
}
