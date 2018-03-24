import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { AutoCompleteDirective } from './auto-complete.directive';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    AsyncObservablePipeComponent,
    AutoCompleteDirective,
    TypeAheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
