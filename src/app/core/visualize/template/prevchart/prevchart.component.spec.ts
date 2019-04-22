import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevchartComponent } from './prevchart.component';

describe('PrevchartComponent', () => {
  let component: PrevchartComponent;
  let fixture: ComponentFixture<PrevchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
