import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteMate } from '../note-mate';
import { NoteMateService } from '../note-mate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {

  noteMateId = 0;
  noteTitle = '';
  noteBody = '';

  noteMateObject: NoteMate;

  constructor(private activatedRoute: ActivatedRoute, private noteMateService: NoteMateService) { 
    this.activatedRoute.params.subscribe((data) => {
      this.noteMateId = data.id;
    });

    this.noteMateService.getNoteMateById(this.noteMateId).subscribe((data) => {
      this.noteTitle = data.noteTitle;
      this.noteBody = data.noteBody;
    });   
  }

  ngOnInit(): void {
  }

  public updateNote(notes: NgForm): void {
    let updateNote = {
      id: this.noteMateId,
      noteTitle:  notes.value.noteTitle,
      noteBody :  notes.value.notebody
    }

    this.noteMateService.updateNoteMate(updateNote).subscribe((data)=> {
      console.log(data);
    })
  }
}