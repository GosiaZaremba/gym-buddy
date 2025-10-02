import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.sass',
})
export class ModalComponent {
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
