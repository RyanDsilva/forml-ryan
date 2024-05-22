import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackSafeComponent } from './crack-safe.component';

describe('CrackSafeComponent', () => {
  let component: CrackSafeComponent;
  let fixture: ComponentFixture<CrackSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrackSafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrackSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
