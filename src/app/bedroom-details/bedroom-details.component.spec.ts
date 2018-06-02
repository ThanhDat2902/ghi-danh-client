import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomDetailsComponent } from './bedroom-details.component';

describe('BedroomDetailsComponent', () => {
  let component: BedroomDetailsComponent;
  let fixture: ComponentFixture<BedroomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedroomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
