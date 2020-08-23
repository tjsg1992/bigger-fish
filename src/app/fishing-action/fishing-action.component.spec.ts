import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingActionComponent } from './fishing-action.component';

describe('FishingActionComponent', () => {
  let component: FishingActionComponent;
  let fixture: ComponentFixture<FishingActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
