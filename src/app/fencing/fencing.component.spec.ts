import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FencingComponent } from './fencing.component';

describe('FencingComponent', () => {
  let component: FencingComponent;
  let fixture: ComponentFixture<FencingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FencingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
