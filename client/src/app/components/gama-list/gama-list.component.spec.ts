import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaListComponent } from './gama-list.component';

describe('GamaListComponent', () => {
  let component: GamaListComponent;
  let fixture: ComponentFixture<GamaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
