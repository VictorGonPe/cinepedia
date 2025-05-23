import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSectionComponent } from './film-section.component';

describe('FilmSectionComponent', () => {
  let component: FilmSectionComponent;
  let fixture: ComponentFixture<FilmSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
