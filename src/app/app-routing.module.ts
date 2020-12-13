import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNoteMateComponent } from '../app/notes/create-note-mate/create-note-mate.component'
import { FilterNotesComponent } from './notes/filter-notes/filter-notes.component';
import { UpdateNotesComponent } from './notes/update-notes/update-notes.component';
const routes: Routes = [
  { path: '', component: FilterNotesComponent},
  { path: 'create-notes', component: CreateNoteMateComponent},
  { path: 'update-notes/:id', component: UpdateNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
