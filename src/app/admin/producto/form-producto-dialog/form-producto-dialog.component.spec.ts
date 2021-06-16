import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductoDialogComponent } from './form-producto-dialog.component';

describe('FormProductoDialogComponent', () => {
  let component: FormProductoDialogComponent;
  let fixture: ComponentFixture<FormProductoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
