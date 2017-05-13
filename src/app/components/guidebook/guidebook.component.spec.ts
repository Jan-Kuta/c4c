import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidebookComponent } from './guidebook.component';

describe('GuidebookComponent', () => {
  let component: GuidebookComponent;
  let fixture: ComponentFixture<GuidebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
