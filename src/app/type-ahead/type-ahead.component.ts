import { Component, Provider, forwardRef, ViewChild, ElementRef, AfterViewInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const noOp = () => { };

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeAheadComponent),
    multi: true
  }]
})
export class TypeAheadComponent implements ControlValueAccessor, OnDestroy, AfterViewInit {
  @ViewChild('typeAhead') input: ElementRef;

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

  private onTouchedCallback: () => void = noOp;
  private onChangeCallback: (_: any) => void = noOp;

  private keyUpSubscription: Subscription = null;

  private _value = '';
  private foundItems = [];

  // get accessor
  get value(): any {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  constructor() { }

  anchorClick(event) {
    console.log(event);
  }

  select(item: string) {
    this.value = item;
    this.foundItems = [];
  }

  ngOnDestroy(): void {
    if (this.keyUpSubscription) {
      this.keyUpSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.keyUpSubscription = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((e: KeyboardEvent) => this.input.nativeElement.value),
        filter(text => text.length > 2),
        debounceTime(100),
        distinctUntilChanged(),
        switchMap(
          () => of(this.data.filter(
            (element, index, array) => element.toLowerCase().indexOf(this.input.nativeElement.value.toLowerCase()) >= 0
          )
          ).pipe(
            map(items => this.foundItems = items)
          )
        )
      ).subscribe();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onBlur() {
    this.onTouchedCallback();
  }

  setDisabledState?(isDisabled: boolean): void {

  }

}
