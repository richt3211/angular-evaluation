import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

const routes: Routes = [
  { path: 'list', component: PersonListComponent},
  { path: 'person/:id', component: PersonDetailsComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
