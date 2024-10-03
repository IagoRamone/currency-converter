import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NossoTimePage } from './nosso-time.page';

describe('NossoTimePage', () => {
  let component: NossoTimePage;
  let fixture: ComponentFixture<NossoTimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NossoTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
