import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderBookComponent } from './reader-book.component';

describe('ReaderBookComponent', () => {
  let component: ReaderBookComponent;
  let fixture: ComponentFixture<ReaderBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
