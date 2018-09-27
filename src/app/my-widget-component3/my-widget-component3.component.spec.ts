import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWidgetComponent3Component } from './my-widget-component3.component';

describe('MyWidgetComponent3Component', () => {
  let component: MyWidgetComponent3Component;
  let fixture: ComponentFixture<MyWidgetComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWidgetComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWidgetComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
