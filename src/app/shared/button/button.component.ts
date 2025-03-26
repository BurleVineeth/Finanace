import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) name!: string;
  @Input() class: string = '';

  @Output() onClick = new EventEmitter<boolean>();

  public trigger() {
    this.onClick.emit(true);
  }
}
