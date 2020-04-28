import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentimeComponent } from './currentime.component';

describe('CurrentimeComponent', () => {
  let component: CurrentimeComponent;
  let fixture: ComponentFixture<CurrentimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
