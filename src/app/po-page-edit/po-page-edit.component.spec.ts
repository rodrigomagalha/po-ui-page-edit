import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPageEditComponent } from './po-page-edit.component';

describe('PoPageEditComponent', () => {
  let component: PoPageEditComponent;
  let fixture: ComponentFixture<PoPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoPageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
