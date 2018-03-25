import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { AutoTestComponent } from './auto-test/auto-test.component';

const routes: Routes = [
  { path: 'typeahead', component: TypeAheadComponent },
  { path: 'asyncpipe', component: AsyncObservablePipeComponent },
  { path: 'autodirective', component: AutoTestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
