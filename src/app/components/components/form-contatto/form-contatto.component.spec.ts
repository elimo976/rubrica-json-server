import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContattoComponent } from './form-contatto.component';

describe('FormContattoComponent', () => {
  let component: FormContattoComponent;
  let fixture: ComponentFixture<FormContattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormContattoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
