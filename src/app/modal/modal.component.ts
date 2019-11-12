import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() show: boolean;
  @Output() closeModal = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeModal.emit();
  }
}
