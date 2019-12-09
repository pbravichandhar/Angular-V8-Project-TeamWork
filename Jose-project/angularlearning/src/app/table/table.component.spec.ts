import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponents } from './table.component';

describe('TableComponent', () => {
  let component: TableComponents;
  let fixture: ComponentFixture<TableComponents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
