import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaFormComponent } from './gama-form.component';

describe('GamaFormComponent', () => {
  let component: GamaFormComponent;
  let fixture: ComponentFixture<GamaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
