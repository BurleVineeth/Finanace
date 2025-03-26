import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  public identify<T extends { id: string }>(index: number, item: T) {
    return `${item.id} - ${index}`;
  }

  public getErrorMessage(control: FormControl, field: string): string {
    if (control.errors) {
      if (control.hasError('required')) {
        return `* ${field} is required`;
      }
      if (control.hasError('minlength')) {
        return `* ${field} must be at least ${control.errors['minlength'].requiredLength} characters long`;
      }
      if (control.hasError('maxlength')) {
        return `* ${field} must not exceed ${control.errors['maxlength'].requiredLength} characters`;
      }
      if (control.hasError('email')) {
        return `* Please enter a valid email address`;
      }
      if (control.hasError('pattern')) {
        return `* Invalid ${field} format`;
      }
    }
    return '';
  }
}
