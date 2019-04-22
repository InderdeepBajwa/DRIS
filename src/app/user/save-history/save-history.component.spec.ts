import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHistoryComponent } from './save-history.component';

describe('SaveHistoryComponent', () => {
  let component: SaveHistoryComponent;
  let fixture: ComponentFixture<SaveHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
