import { Component, inject, input, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormatKeyPipe } from '../../core/pipes/format-key.pipe';
import { SharedService } from '../../core/services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule, FormatKeyPipe, CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  public id = input.required<string>();
  @Input({ required: true }) control!: FormControl;

  private readonly sharedSvc = inject(SharedService);

  public getErrorMessage(): string {
    return this.sharedSvc.getErrorMessage(this.control, this.id());
  }
}
