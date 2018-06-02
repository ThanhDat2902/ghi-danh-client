import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBedroomComponent } from './add-bedroom.component';

describe('AddBedroomComponent', () => {
  let component: AddBedroomComponent;
  let fixture: ComponentFixture<AddBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
