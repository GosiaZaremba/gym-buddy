import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass',
})
export class MainPageComponent {
  constructor(private router: Router) {}

  goToTraining(type: string) {
    this.router.navigate(['/new-training-session'], {
      state: { trainingType: type },
    });
  }
}
