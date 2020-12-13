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
    this.noteMateService.getAllNoteMates().subscribe( (data) => {
      this.noteMates = data;
      console.log(this.noteMates);
    });
  }

  ngOnInit(): void {
  }

  public filter(filter: NgForm): void {
    this.filterData = filter.value.filter;
    console.log(this.filterData);
    this.noteMateService.searchNoteByNoteTitle(this.filterData).subscribe((data) => {
      this.noteMates = data;
      console.log(this.noteMates);
    });
  }

  public deleteNote(id: number): void {
    this.noteMateService.deleteByNoteId(id).subscribe((data) => {
        console.log(data);
    });
  }
}
