import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbCreateComponent } from './dumb-create.component';

describe('DumbCreateComponent', () => {
  let component: DumbCreateComponent;
  let fixture: ComponentFixture<DumbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
