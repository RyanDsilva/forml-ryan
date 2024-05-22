import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CrackSafeApiService } from '../services/crack-safe-api.service';
import { CrackSafeResponse } from '../../types';

@Component({
  selector: 'app-crack-safe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crack-safe.component.html',
  styleUrl: './crack-safe.component.scss',
})
export class CrackSafeComponent {
  constructor(private crackSafeApiService: CrackSafeApiService) {}

  crack_safe_results: CrackSafeResponse = {
    attempts: -1,
    time_taken: -1,
  };

  actual_combination = new FormControl('');

  error_message: string = '';

  checkInputValid(text: string) {
    if (text.length == 10 && /^\d+$/.test(text)) {
      return true;
    } else {
      return false;
    }
  }

  submitCombination() {
    this.error_message = '';
    if (this.checkInputValid(this.actual_combination.value!)) {
      this.crackSafeApiService
        .crackSafe(
          'http://localhost:5001/api/crack_safe',
          {
            actual_combination: this.actual_combination.value!,
          },
          {}
        )
        .subscribe({
          next: (res: CrackSafeResponse) => (this.crack_safe_results = res),
          error: (err) => console.log(err),
        });
    } else {
      this.error_message =
        'Invalid Input. Must Be of length 10 and only include characters 0-9.';
    }
  }
}
