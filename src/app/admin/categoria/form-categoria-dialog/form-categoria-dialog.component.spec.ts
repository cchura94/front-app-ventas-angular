import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoriaDialogComponent } from './form-categoria-dialog.component';

describe('FormCategoriaDialogComponent', () => {
  let component: FormCategoriaDialogComponent;
  let fixture: ComponentFixture<FormCategoriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCategoriaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCategoriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
