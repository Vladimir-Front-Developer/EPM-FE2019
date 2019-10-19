import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-torpedo-boat',
  templateUrl: './torpedo-boat.component.html',
  styleUrls: ['./torpedo-boat.component.scss']
})
export class TorpedoBoatComponent implements OnInit {
  @Output() onSelectTorpedoBoat: EventEmitter<any> = new EventEmitter<any>()
  torpedoBoat: object = {
    type: 'torpedoBoat',
    length: 1,
    qt: 4
  }
  constructor(){}
  ngOnInit(){}
  public selectShip(){
    this.onSelectTorpedoBoat.emit(this.torpedoBoat)
  }
}
