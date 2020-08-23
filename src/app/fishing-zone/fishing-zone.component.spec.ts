import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingZoneComponent } from './fishing-zone.component';

describe('FishingZoneComponent', () => {
  let component: FishingZoneComponent;
  let fixture: ComponentFixture<FishingZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
