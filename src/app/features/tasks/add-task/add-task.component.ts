import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { taskForm } from '../../../core/models';
import { TextInputComponent } from '../../../shared/text-input/text-input.component';
import { NumberInputComponent } from '../../../shared/number-input/number-input.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-add-task',
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
    ButtonComponent,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  public taskForm!: FormGroup<taskForm>;

  private readonly formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.initializeForm();
  }

  public clearForm() {
    this.taskForm.reset({}, { emitEvent: false });
  }

  public getFormControl(field: keyof taskForm) {
    return this.taskForm.get(field) as FormControl;
  }

  private initializeForm() {
    this.taskForm = this.formBuilder.nonNullable.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      dueDate: [0, [Validators.required]],
      completed: [false, [Validators.required]],
    });
  }
}
