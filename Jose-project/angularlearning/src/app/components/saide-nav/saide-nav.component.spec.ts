import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaideNavComponent } from './saide-nav.component';

describe('SaideNavComponent', () => {
  let component: SaideNavComponent;
  let fixture: ComponentFixture<SaideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
