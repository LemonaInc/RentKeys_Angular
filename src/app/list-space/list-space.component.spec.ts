import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpaceComponent } from './list-space.component';

describe('ListSpaceComponent', () => {
  let component: ListSpaceComponent;
  let fixture: ComponentFixture<ListSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
