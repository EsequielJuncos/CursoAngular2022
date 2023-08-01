import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilomonoComponent } from './estilomono.component';

describe('EstilomonoComponent', () => {
  let component: EstilomonoComponent;
  let fixture: ComponentFixture<EstilomonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstilomonoComponent]
    });
    fixture = TestBed.createComponent(EstilomonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
