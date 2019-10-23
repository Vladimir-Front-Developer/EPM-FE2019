import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {shipInterface} from "../../../services/config.service";

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  @Input() ship: shipInterface
  @Output() onSelectShip: EventEmitter<any> = new EventEmitter<any>()

  constructor(){}

  ngOnInit(){}

  public selectShip(){
    this.onSelectShip.emit(this.ship)
  }

}
