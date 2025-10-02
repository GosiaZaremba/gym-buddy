import { Component, OnInit } from '@angular/core';
import { ExerciseLogService } from '../../services/exercise-log.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-log.component.html',
  styleUrl: './training-log.component.sass',
})
export class TrainingLogComponent implements OnInit {
  exerciseLog: any[] = [];
  constructor(private exerciseLogService: ExerciseLogService) {}

  ngOnInit() {
    this.logExerciseLog();
  }

  logExerciseLog() {
    this.exerciseLogService.getLog().subscribe((log) => {
      this.exerciseLog = log;
    });
  }
}
