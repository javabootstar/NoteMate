import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteMateComponent } from './create-note-mate.component';

describe('CreateNoteMateComponent', () => {
  let component: CreateNoteMateComponent;
  let fixture: ComponentFixture<CreateNoteMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoteMateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
