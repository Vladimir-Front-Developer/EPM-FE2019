import { Injectable } from '@angular/core';
import { GridSquareInterface } from "./grid-square/grid-square.interface";

@Injectable({
  providedIn: 'root'
})
export class CoordinateGridService {

  generateCoordinates(length: number, user: string): GridSquareInterface [][]{
    return new Array(length)
      .fill(null, 0, length)
      .map((el, idxX) => new Array(length)
        .fill(null, 0, length)
        .map((el, idxY) => {
          return {
            user: user,
            status: 'sea',
            hover: false,
            x: idxX,
            y: idxY,
          }
        })
      )
  }

}
