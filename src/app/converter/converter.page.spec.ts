import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConverterPage } from './converter.page';

describe('ConverterPage', () => {
  let component: ConverterPage;
  let fixture: ComponentFixture<ConverterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
