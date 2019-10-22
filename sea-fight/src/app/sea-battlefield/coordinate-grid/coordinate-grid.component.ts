import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CoordinateGridService } from "./coordinate-grid.service";
import { GridSquareInterface } from "./grid-square/grid-square.interface";

@Component({
  selector: 'app-coordinate-grid',
  templateUrl: './coordinate-grid.component.html',
  styleUrls: ['./coordinate-grid.component.scss']
})
export class CoordinateGridComponent implements OnInit {
  @Input() user: string
  markupX: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  markupY: Array<string> = ' 0123456789'.split('')
  lengthGrid: number = 10
  coordinates: GridSquareInterface [][]
  shipPosition: boolean = true

  constructor(private coordinateGridService: CoordinateGridService){
    this.coordinates = coordinateGridService.generateCoordinates(this.lengthGrid)
  }

  ngOnInit(){}

  @HostListener('window:keyup', ['$event'])
  onKeydown(event){
    if(event.keyCode === 32) {
      this.shipPosition = !this.shipPosition
    }
  }

  hoverSquare(item){
    const lengthShip = 4
    for(let i = 0; i < lengthShip; i++) {
      try {
        if(this.shipPosition) this.coordinates[item.x][item.y + i].hover = item.hover
        else this.coordinates[item.x + i][item.y].hover = item.hover
      } catch (e) {}
    }
  }
}
