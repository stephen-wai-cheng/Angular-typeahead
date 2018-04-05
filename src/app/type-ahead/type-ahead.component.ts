import {
  Component,
  Provider,
  forwardRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, Validators, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const noOp = () => { };

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeAheadComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TypeAheadComponent,
      multi: true
    }
  ]
})
export class TypeAheadComponent implements ControlValueAccessor, OnDestroy, AfterViewInit, Validator {
  @ViewChild('typeAhead') input: ElementRef;
  @ViewChild('taItems') taItems: ElementRef;

  @Input() data = [];

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
  set value(newValue: any) {
    if (newValue !== this._value) {
      this._value = newValue;
      this.onChangeCallback(newValue);
    }
  }

  constructor() { }

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
    console.log(this.input.nativeElement.Validator);
    this.onTouchedCallback();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.input.nativeElement.readOnly = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    return this.input.nativeElement.validity.valid ? null : { boo: 'some error' };
  }

  focusItem(i: number) {
    const numItems = this.taItems.nativeElement.querySelectorAll('a[name^="taItem_"]').length;
    console.log(`focusItem : ${i}, numItems : ${numItems}`);
    if (i >= 0 && i < numItems) {
      const targetItem = this.taItems.nativeElement.querySelector(`a[name="taItem_${i}"]`);
      if (targetItem) {
        targetItem.focus();
      }
    }
    return false;
  }
}
