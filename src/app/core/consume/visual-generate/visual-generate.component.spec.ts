import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualGenerateComponent } from './visual-generate.component';

describe('VisualGenerateComponent', () => {
  let component: VisualGenerateComponent;
  let fixture: ComponentFixture<VisualGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
