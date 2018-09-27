import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWidgetComponent1Component } from './my-widget-component1.component';

describe('MyWidgetComponent1Component', () => {
  let component: MyWidgetComponent1Component;
  let fixture: ComponentFixture<MyWidgetComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWidgetComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWidgetComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
