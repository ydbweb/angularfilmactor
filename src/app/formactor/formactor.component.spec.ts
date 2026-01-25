import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormactorComponent } from './formactor.component';

describe('FormactorComponent', () => {
  let component: FormactorComponent;
  let fixture: ComponentFixture<FormactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormactorComponent]
    });
    fixture = TestBed.createComponent(FormactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
