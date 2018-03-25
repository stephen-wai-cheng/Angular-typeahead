import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { AutoCompleteDirective } from './auto-complete.directive';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AutoTestComponent } from './auto-test/auto-test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    AsyncObservablePipeComponent,
    AutoCompleteDirective,
    TypeAheadComponent,
    AutoTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
