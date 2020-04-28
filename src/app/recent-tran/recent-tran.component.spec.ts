import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTranComponent } from './recent-tran.component';

describe('RecentTranComponent', () => {
  let component: RecentTranComponent;
  let fixture: ComponentFixture<RecentTranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentTranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
