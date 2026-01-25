import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-formactor',
    templateUrl: './formactor.component.html',
    styleUrls: ['./formactor.component.css'],
    standalone: false
})
export class FormactorComponent {
  @Input() actor_id: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();
  FormactorComponent() { }

    addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  


}