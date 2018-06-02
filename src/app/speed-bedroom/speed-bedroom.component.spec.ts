import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedBedroomComponent } from './speed-bedroom.component';

describe('SpeedBedroomComponent', () => {
  let component: SpeedBedroomComponent;
  let fixture: ComponentFixture<SpeedBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
