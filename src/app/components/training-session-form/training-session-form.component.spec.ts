import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionFormComponent } from './training-session-form.component';

describe('TrainingSessionFormComponent', () => {
  let component: TrainingSessionFormComponent;
  let fixture: ComponentFixture<TrainingSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingSessionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
