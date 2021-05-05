import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwithasyncComponent } from './listwithasync.component';

describe('ListwithasyncComponent', () => {
  let component: ListwithasyncComponent;
  let fixture: ComponentFixture<ListwithasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListwithasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwithasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
