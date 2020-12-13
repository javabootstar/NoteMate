import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteMateService } from '../note-mate.service';

@Component({
  selector: 'app-create-note-mate',
  templateUrl: './create-note-mate.component.html',
  styleUrls: ['./create-note-mate.component.css']
})
export class CreateNoteMateComponent implements OnInit {

  constructor(private noteService: NoteMateService) { }

  ngOnInit(): void {
  }

  public createNewNotes(newNotes: NgForm): void {
    let noteMateObject = {
      noteTitle: newNotes.value.title,
      noteBody: newNotes.value.notebody
    }
    this.noteService.createNoteMate(noteMateObject).subscribe((data) => {
      alert('Successfully Created Your Note Mate.');
    });
  }
}
