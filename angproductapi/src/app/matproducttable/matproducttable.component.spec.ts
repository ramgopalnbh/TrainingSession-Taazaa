import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatproducttableComponent } from './matproducttable.component';

describe('MatproducttableComponent', () => {
  let component: MatproducttableComponent;
  let fixture: ComponentFixture<MatproducttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatproducttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatproducttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
