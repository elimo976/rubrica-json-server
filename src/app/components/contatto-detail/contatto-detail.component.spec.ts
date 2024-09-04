import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoDetailComponent } from './contatto-detail.component';

describe('ContattoDetailComponent', () => {
  let component: ContattoDetailComponent;
  let fixture: ComponentFixture<ContattoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContattoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContattoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
