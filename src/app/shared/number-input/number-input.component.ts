import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormatKeyPipe } from '../../core/pipes/format-key.pipe';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-number-input',
  imports: [ReactiveFormsModule, FormatKeyPipe, CommonModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) control!: FormControl;

  private readonly sharedSvc = inject(SharedService);

  public getErrorMessage(): string {
    return this.sharedSvc.getErrorMessage(this.control, this.id);
  }
}
