import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise.model';
import { ExerciseLogGroup } from '../../models/exercise-log-group.model';
import { ExerciseService } from '../../services/exercise.service';
import { ExerciseLogService } from '../../services/exercise-log.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-training-session',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './training-session.component.html',
  styleUrl: './training-session.component.sass',
})
export class TrainingSessionComponent implements OnInit {
  submittedExercises: Exercise[] = [];
  trainingType: string | null = null;
  allExercises: Exercise[] = [];
  filteredExercises: Exercise[] = [];
  checkboxForm: FormGroup;

  constructor(
    private exerciseService: ExerciseService,
    private fb: FormBuilder,
    private exerciseLogService: ExerciseLogService
  ) {
    const nav = window.history.state;
    this.trainingType = nav && nav.trainingType ? nav.trainingType : null;
    this.checkboxForm = this.fb.group({
      done: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.exerciseService.getExercises().subscribe((exs) => {
      this.allExercises = exs;
      this.filterExercises();
      this.initCheckboxes();
    });
  }

  initCheckboxes() {
    const doneArray = this.checkboxForm.get('done') as FormArray;
    doneArray.clear();
    for (let i = 0; i < this.filteredExercises.length; i++) {
      doneArray.push(this.fb.control(false));
    }
  }

  filterExercises() {
    if (this.trainingType) {
      this.filteredExercises = this.allExercises.filter((e) =>
        (e.category ?? '')
          .toLowerCase()
          .includes(this.trainingType!.toLowerCase())
      );
    } else {
      this.filteredExercises = this.allExercises;
    }
    this.initCheckboxes();
  }

  onSubmitCheckboxForm() {
    const doneArray = this.checkboxForm.value.done;
    const now = new Date().toISOString();
    const completedExercises = this.filteredExercises
      .map((ex, i) => (doneArray[i] ? ex : null))
      .filter((ex): ex is Exercise => !!ex);
    const logGroup: ExerciseLogGroup = {
      date: now,
      exercises: completedExercises.map((ex) => ({
        name: ex.name,
        minWeight: ex.minWeight,
        maxWeight: ex.maxWeight,
      })),
    };
    this.exerciseLogService.logExercises(logGroup).subscribe((success) => {
      if (success) {
        alert(
          'Exercises sent to log!\n' +
            logGroup.exercises
              .map((e) => `${e.name} (${logGroup.date})`)
              .join(', ')
        );
        console.log(logGroup);
      } else {
        alert('Failed to log exercises.');
      }
    });
  }
}
