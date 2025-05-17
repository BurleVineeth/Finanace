import { DatePipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { Task } from '../../../core/models';
import { Tasks } from '../../../core/constants';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    DatePipe,
    NgStyle,
    ButtonComponent,
    ModalComponent,
    AddTaskComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  public canShowTaskForm: boolean = false;
  public tasks: Task[] = Tasks;

  public addTask() {
    this.canShowTaskForm = true;
  }

  public closeTaskForm() {
    this.canShowTaskForm = false;
  }
}
