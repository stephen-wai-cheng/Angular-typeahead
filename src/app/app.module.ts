import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { AutoCompleteDirective } from './auto-complete.directive';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AsyncObservablePipeComponent } from './routes/async-observable-pipe/async-observable-pipe.component';
import { AutoCompleteRouteComponent } from './routes/auto-complete-route/auto-complete-route.component';
import { TypeAheadRouteComponent } from './routes/type-ahead-route/type-ahead-route.component';


@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    AsyncObservablePipeComponent,
    AutoCompleteDirective,
    TypeAheadComponent,
    AutoCompleteRouteComponent,
    TypeAheadRouteComponent
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
