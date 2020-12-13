import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteMate } from './note-mate';

@Injectable({
  providedIn: 'root'
})
export class NoteMateService {

  private URL: string = 'http://localhost:3000/notes/';

  constructor(private httpClient: HttpClient) {}

  public getAllNoteMates(): Observable<NoteMate> {
    return this.httpClient.get<NoteMate>(this.URL);
  }

  public getNoteMateById(id: number): Observable<NoteMate> {
    return this.httpClient.get<NoteMate>(this.URL +  id);
  }

  public createNoteMate(noteMate: any): Observable<NoteMate> {
    return this.httpClient.post<NoteMate>(this.URL, noteMate);
  }

  public updateNoteMate(noteMate: any): Observable<NoteMate> {
    return this.httpClient.put<NoteMate>(this.URL + noteMate.id, noteMate);
  }

  public deleteByNoteId(noteId: number): Observable<NoteMate> {
    return this.httpClient.delete<NoteMate>(this.URL +  noteId);
  }

  public searchNoteByNoteTitle(noteTitle: string): Observable<NoteMate> {
    return this.httpClient.get<NoteMate>("http://localhost:3000/notes?noteTitle=" + noteTitle);
  }

}