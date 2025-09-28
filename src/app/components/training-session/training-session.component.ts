import { Component } from '@angular/core';
import { TrainingSessionFormComponent } from '../training-session-form/training-session-form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'app-training-session',
  standalone: true,
  imports: [CommonModule, TrainingSessionFormComponent],
  templateUrl: './training-session.component.html',
  styleUrl: './training-session.component.sass',
})
export class TrainingSessionComponent {
  submittedExercises: Exercise[] = [];
  trainingType: string | null = null;

  constructor() {
    const nav = window.history.state;
    this.trainingType = nav && nav.trainingType ? nav.trainingType : null;
  }

  handleFormSubmit(data: Exercise) {
    this.submittedExercises.push(data);
  }
}
