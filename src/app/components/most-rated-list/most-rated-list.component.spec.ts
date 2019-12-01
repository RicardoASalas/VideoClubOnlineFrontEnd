import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRatedListComponent } from './most-rated-list.component';

describe('MostRatedListComponent', () => {
  let component: MostRatedListComponent;
  let fixture: ComponentFixture<MostRatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRatedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
