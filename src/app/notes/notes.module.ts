import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../../app/material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilterNotesComponent } from './filter-notes/filter-notes.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { CreateNoteMateComponent } from './create-note-mate/create-note-mate.component';



@NgModule({
  declarations: [FilterNotesComponent, UpdateNotesComponent, CreateNoteMateComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [FilterNotesComponent, UpdateNotesComponent]
})
export class NotesModule { }
