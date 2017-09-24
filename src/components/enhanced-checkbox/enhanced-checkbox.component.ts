import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'enhanced-checkbox',
  templateUrl: 'enhanced-checkbox.component.html'
})
export class EnhancedCheckboxComponent {
  currentChoice: number = 2; // none

  @Input() title: string;
  @Input() required: string;
  @Output() choiceClicked = new EventEmitter();

  constructor() { }

  buttonClicked(choice) {
    if (choice == true) {
      this.currentChoice = 1;
    }
    else if (choice == false) {
      this.currentChoice = 3;
    }
    else {
      this.currentChoice = 2;
    }

    this.choiceClicked.emit(choice);
  }
}
