import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHelpComponent } from './student-help.component';

describe('StudentHelpComponent', () => {
  let component: StudentHelpComponent;
  let fixture: ComponentFixture<StudentHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
