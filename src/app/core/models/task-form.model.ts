import { FormControl } from '@angular/forms';

export interface taskForm {
  title: FormControl<string>;
  description: FormControl<string>;
  dueDate: FormControl<number>;
  completed: FormControl<boolean>;
}
