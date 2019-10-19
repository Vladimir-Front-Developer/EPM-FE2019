import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  selectedShip: string
  constructor(){}
  ngOnInit(){}
  selectShip(ship){
    this.selectedShip = ship.type
    console.log(this.selectedShip)
  }
}
