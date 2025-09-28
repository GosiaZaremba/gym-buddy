import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-training-session-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './training-session-form.component.html',
  styleUrl: './training-session-form.component.sass',
})
export class TrainingSessionFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  exerciseType: string = '';
  weight: number = 0;
  reps: number = 0;
  series: number = 0;

  onSubmit() {
    const data = {
      exerciseType: this.exerciseType,
      weight: this.weight,
      reps: this.reps,
      series: this.series,
    };
    this.formSubmit.emit(data);
    // Reset form fields
    this.exerciseType = '';
    this.weight = 0;
    this.reps = 0;
    this.series = 0;
  }
}
