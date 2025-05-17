import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public name = input.required<string>();
  public class = input<'primary' | 'basic'>('basic');

  @Output() onClick = new EventEmitter<boolean>();

  public trigger() {
    this.onClick.emit(true);
  }
}
