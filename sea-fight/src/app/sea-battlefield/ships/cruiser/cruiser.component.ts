import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cruiser',
  templateUrl: './cruiser.component.html',
  styleUrls: ['./cruiser.component.scss']
})
export class CruiserComponent implements OnInit {
  @Output() onSelectCruiser: EventEmitter<any> = new EventEmitter<any>()
  cruiser: object = {
    type: 'cruiser',
    length: 3,
    qt: 2
  }
  constructor(){}
  ngOnInit(){}
  public selectShip(){
    this.onSelectCruiser.emit(this.cruiser)
  }
}
