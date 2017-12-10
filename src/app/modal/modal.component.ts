import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() show: boolean;
  @Output() closeModal = new EventEmitter();

  // The modal 'window'
  modalStyle = {
    // borderRadius: 5,
    position: 'relative',
    maxWidth: '550px',
    minHeight: '350px',
    margin: '6em auto',
    padding: '30px',
    backgroundColor: '#fff'
  };

  // The gray background
  backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '50px'
  };

  closeIconStyle = {
    position: 'absolute',
    top: '-14px',
    right: '-14px',
    width: '28px',
    height: '28px'
  };

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeModal.emit();
  }
}
