import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ExerciseLogGroup } from '../models/exercise-log-group.model';

@Injectable({ providedIn: 'root' })
export class ExerciseLogService {
  private logUrl = 'assets/data/ex-log.json';

  constructor(private http: HttpClient) {}

  logExercises(logGroup: ExerciseLogGroup): Observable<boolean> {
    const key = 'exercise-log';
    let log: ExerciseLogGroup[] = [];
    try {
      const existing = localStorage.getItem(key);
      if (existing) {
        log = JSON.parse(existing);
      }
    } catch (e) {
      log = [];
    }
    log.push(logGroup);
    localStorage.setItem(key, JSON.stringify(log));
    return of(true);
  }

  getLog(): Observable<ExerciseLogGroup[]> {
    const key = 'exercise-log';
    let log: ExerciseLogGroup[] = [];
    try {
      const existing = localStorage.getItem(key);
      if (existing) {
        log = JSON.parse(existing);
      }
    } catch (e) {
      log = [];
    }
    return of(log);
  }
}
