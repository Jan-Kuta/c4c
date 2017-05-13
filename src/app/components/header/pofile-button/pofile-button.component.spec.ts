import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PofileButtonComponent } from './pofile-button.component';

describe('PofileButtonComponent', () => {
  let component: PofileButtonComponent;
  let fixture: ComponentFixture<PofileButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PofileButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PofileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
