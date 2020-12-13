import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NoteMate } from '../note-mate';
import { NoteMateService } from '../note-mate.service';

@Component({
  selector: 'app-filter-notes',
  templateUrl: './filter-notes.component.html',
  styleUrls: ['./filter-notes.component.css']
})
export class FilterNotesComponent implements OnInit {

  filterData = '';
  noteMates: NoteMate;

  constructor(private noteMateService: NoteMateService) {
    this.getAllNoteMates();
  }

  ngOnInit(): void {
  }

  public filter(filterEvent: any): void {
    this.noteMateService.searchNoteByNoteTitle(filterEvent.target.value).subscribe((data) => {
      this.noteMates = data;
    });

    if (filterEvent.target.value === '') {
      this.getAllNoteMates();
    }
  }

  private getAllNoteMates(): void {
    this.noteMateService.getAllNoteMates().subscribe( (data) => {
      this.noteMates = data;
    });
  }

  public deleteNote(id: number): void {
    this.noteMateService.deleteByNoteId(id).subscribe((data) => {
      console.log('Delete Successfully');
    });
  }
}
