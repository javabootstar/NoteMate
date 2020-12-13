import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNotesComponent } from './filter-notes.component';

describe('FilterNotesComponent', () => {
  let component: FilterNotesComponent;
  let fixture: ComponentFixture<FilterNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
