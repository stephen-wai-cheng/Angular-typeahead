import { Directive, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective implements OnInit {

  private data = [
    'Star Wars: The Last Jedi',
    'Beauty and the Beast',
    'The Fate of the Furious',
    'Despicable Me 3',
    'Jumanji: Welcome to the Jungle',
    'Spider-Man: Homecoming',
    'Wolf Warrior 2',
    'Guardians of the Galaxy Vol. 2',
    'Thor: Ragnarok',
    'Wonder Woman'
  ];

  foundItems = [];

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {

    const tyepAhead$ = fromEvent(this.hostElement.nativeElement, 'keyup')
      .pipe(
        map((e: KeyboardEvent) => this.hostElement.nativeElement.value),
        filter(text => text.length > 2),
        debounceTime(10),
        distinctUntilChanged(),
        switchMap(
          () => of(this.data.filter(
            (element, index, array) => element.toLowerCase().indexOf(this.hostElement.nativeElement.value.toLowerCase()) >= 0
          )
          ).pipe(
            map(items => this.foundItems = items)
          )
        )
      ).subscribe((data) => console.log(this.foundItems));
  }
}
