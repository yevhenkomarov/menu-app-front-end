import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteItemComponent } from './concrete-item.component';

describe('ConcreteItemComponent', () => {
  let component: ConcreteItemComponent;
  let fixture: ComponentFixture<ConcreteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
