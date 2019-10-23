import { Component, OnInit } from '@angular/core';
import { ConfigService, shipsInterface } from "../../services/config.service";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  selectedShip: string
  shipsConfigs: shipsInterface

  constructor(private cfgSvc: ConfigService){}

  ngOnInit(){
    this.cfgSvc.getShips().subscribe(ships => this.shipsConfigs = ships)
  }

  selectShip(ship){
    this.selectedShip = ship.type
    console.log(this.selectedShip)
  }
}
