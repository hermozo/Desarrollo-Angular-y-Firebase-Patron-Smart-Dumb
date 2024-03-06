import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbViewComponent } from './dumb-view.component';

describe('DumbViewComponent', () => {
  let component: DumbViewComponent;
  let fixture: ComponentFixture<DumbViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
