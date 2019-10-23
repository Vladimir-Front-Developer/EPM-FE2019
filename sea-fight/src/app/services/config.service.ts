import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface settingsGridInterface {
  length: number,
  markup: {
    x: string,
    y: string
  }
}

export interface shipInterface {
  type: string,
  imgUrl: string,
  length: number,
  qt: number
}

export interface shipsInterface {
  battleship: shipInterface,
  cruiser: shipInterface,
  destroyer: shipInterface,
  torpedoBoat: shipInterface
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  gridSettingsUrl: string = 'assets/configs/grid-settings.json'
  shipsUrl: string =  'assets/configs/ships.json'

  constructor(private http: HttpClient){}

  getGridSettings(){
    return this.http.get<settingsGridInterface>(this.gridSettingsUrl)
  }

  getShips(){
    return this.http.get<shipsInterface>(this.shipsUrl)
  }
}
