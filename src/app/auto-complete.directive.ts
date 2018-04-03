import { Directive, ElementRef, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective implements OnInit, OnDestroy {

  @Output('foundItems') public foundItems = new EventEmitter<any>();

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

  private _foundItems = [];
  keyUpSubscription: Subscription = null;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    this.keyUpSubscription = fromEvent(this.hostElement.nativeElement, 'keyup')
      .pipe(
        map((e: KeyboardEvent) => this.hostElement.nativeElement.value),
        filter((text: string) => text.length > 2),
        debounceTime(100),
        distinctUntilChanged(),
        switchMap(
          () => of(this.data.filter(
            (element, index, array) => element.toLowerCase().indexOf(this.hostElement.nativeElement.value.toLowerCase()) >= 0
          )
          ).pipe(
            map((items: any[]) => {
              this._foundItems = items;
              this.foundItems.emit(items);
            })
          )
        )
      ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.keyUpSubscription) {
      this.keyUpSubscription.unsubscribe();
    }
  }
}
