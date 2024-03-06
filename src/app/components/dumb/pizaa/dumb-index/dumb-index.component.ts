import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pizza} from "../../../../models/pizza";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dumb-index',
  templateUrl: './dumb-index.component.html',
  styleUrl: './dumb-index.component.scss'
})
export class DumbIndexComponent {

  @Input() arrPizzas!: any;
  @Input() estado!: boolean;
  @Output() dumbEvent: EventEmitter<Pizza> = new EventEmitter<Pizza>();

  public agregarCarro(pizza: Pizza) {
    this.dumbEvent.emit(pizza);
  }
}
