import { Injectable } from '@angular/core';
import { GridSquareInterface } from "./grid-square/grid-square.interface";

@Injectable({
  providedIn: 'root'
})
export class CoordinateGridService {
  constructor(){}
  generateCoordinates(length: number){
    return new Array(length)
      .fill(null, 0, length)
      .map((el, idxX) => new Array(length)
        .fill({}, 0, length)
        .map((el, idxY) => {
          return el.coordinate = {
            status: 'sea',
            x: idxX,
            y: idxY,
          }
        })
      )
  }
}
