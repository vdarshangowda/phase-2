import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSectionComponent } from './test-section.component';

describe('TestSectionComponent', () => {
  let component: TestSectionComponent;
  let fixture: ComponentFixture<TestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
