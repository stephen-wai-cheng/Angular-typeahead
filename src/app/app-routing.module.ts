import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAheadRouteComponent } from './routes/type-ahead-route/type-ahead-route.component';
import { AsyncObservablePipeComponent } from './routes/async-observable-pipe/async-observable-pipe.component';
import { AutoCompleteRouteComponent } from './routes/auto-complete-route/auto-complete-route.component';

const routes: Routes = [
  { path: 'typeahead', component: TypeAheadRouteComponent },
  { path: 'asyncpipe', component: AsyncObservablePipeComponent },
  { path: 'autodirective', component: AutoCompleteRouteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
