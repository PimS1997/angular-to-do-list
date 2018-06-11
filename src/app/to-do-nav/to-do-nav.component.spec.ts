
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoNavComponent } from './to-do-nav.component';

describe('ToDoNavComponent', () => {
  let component: ToDoNavComponent;
  let fixture: ComponentFixture<ToDoNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
