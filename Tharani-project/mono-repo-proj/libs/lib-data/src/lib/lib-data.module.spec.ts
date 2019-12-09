import { async, TestBed } from '@angular/core/testing';
import { LibDataModule } from './lib-data.module';

describe('LibDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibDataModule).toBeDefined();
  });
});
