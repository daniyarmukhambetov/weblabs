import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnComponent } from './pn.component';

describe('PnComponent', () => {
  let component: PnComponent;
  let fixture: ComponentFixture<PnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
