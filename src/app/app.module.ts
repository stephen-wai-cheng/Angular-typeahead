import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { AutoCompleteDirective } from './auto-complete.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    AsyncObservablePipeComponent,
    AutoCompleteDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
