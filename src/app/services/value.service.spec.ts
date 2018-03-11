import { TestBed, inject, async } from '@angular/core/testing';

import { ValueService } from './value.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('ValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    });
  });

  it('should be created ValueService',
    inject(
      [ValueService], (service: ValueService) => {
        service.getValue().subscribe(
          (value) => {
            console.log('Inside subscribe!!!!!!!!!!');
            expect(value).toBe(147);
          }
        );
      }
    )
  );
});
