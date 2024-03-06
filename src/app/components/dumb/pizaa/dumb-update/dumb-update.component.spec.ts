import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbUpdateComponent } from './dumb-update.component';

describe('DumbUpdateComponent', () => {
  let component: DumbUpdateComponent;
  let fixture: ComponentFixture<DumbUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
