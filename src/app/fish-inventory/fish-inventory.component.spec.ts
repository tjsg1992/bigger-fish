import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishInventoryComponent } from './fish-inventory.component';

describe('FishInventoryComponent', () => {
  let component: FishInventoryComponent;
  let fixture: ComponentFixture<FishInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
