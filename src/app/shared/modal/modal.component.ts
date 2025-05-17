import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() modalDismiss = new EventEmitter();

  public backDropDismiss() {
    this.dismiss();
  }

  public stopPropagation(event: Event) {
    event.stopPropagation();
  }

  private dismiss() {
    this.modalDismiss.emit();
  }
}
