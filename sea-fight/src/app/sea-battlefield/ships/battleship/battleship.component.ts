import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.scss']
})
export class BattleshipComponent implements OnInit {
  @Output() onSelectBattleship: EventEmitter<any> = new EventEmitter<any>()
  battleship: object = {
    type: 'battleship',
    length: 4,
    qt: 1
  }
  constructor(){}
  ngOnInit(){}
  public selectShip(){
    this.onSelectBattleship.emit(this.battleship)
  }
}
