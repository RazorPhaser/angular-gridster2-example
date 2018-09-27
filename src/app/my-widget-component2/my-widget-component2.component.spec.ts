import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWidgetComponent2Component } from './my-widget-component2.component';

describe('MyWidgetComponent2Component', () => {
  let component: MyWidgetComponent2Component;
  let fixture: ComponentFixture<MyWidgetComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWidgetComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWidgetComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
