import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbIndexComponent } from './dumb-index.component';

describe('DumbIndexComponent', () => {
  let component: DumbIndexComponent;
  let fixture: ComponentFixture<DumbIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
