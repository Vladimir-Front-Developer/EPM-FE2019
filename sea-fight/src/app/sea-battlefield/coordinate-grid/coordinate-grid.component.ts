import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { CoordinateGridService } from "./coordinate-grid.service";
import { GridSquareInterface } from "./grid-square/grid-square.interface";
import { ConfigService } from "../../services/config.service";

@Component({
  selector: 'app-coordinate-grid',
  templateUrl: './coordinate-grid.component.html',
  styleUrls: ['./coordinate-grid.component.scss']
})
export class CoordinateGridComponent implements OnInit {
  @Input() user: string
  coordinates: GridSquareInterface [][]
  markupX: string
  markupY: Array<string>
  lengthGrid: number
  shipPosition: boolean = true
  lengthShip: number = 4
  currentCoordinate: { x: number, y: number }

  constructor(private coordinateGridService: CoordinateGridService, private cfgSvc: ConfigService){}

  ngOnInit(){
    this.cfgSvc.getGridSettings().subscribe(settings => {
      this.markupX = settings.markup.x
      this.markupY = settings.markup.y.split('')
      this.lengthGrid = settings.length
      this.coordinates = this.coordinateGridService.generateCoordinates(this.lengthGrid, this.user)
    })
  }

  @HostListener('window:keyup', ['$event'])
  onKeydown(event){
    if(event.keyCode === 32) this.shipPosition = !this.shipPosition
    for(let i = 1; i < this.lengthShip; i++) {
      try {
        this.coordinates[this.currentCoordinate.x][this.currentCoordinate.y + i].hover = this.shipPosition
        this.coordinates[this.currentCoordinate.x + i][this.currentCoordinate.y].hover = !this.shipPosition
      } catch (e) {}
    }
  }

  hoverSquare(item){
    this.currentCoordinate = { x: item.x, y: item.y }
    for(let i = 0; i < this.lengthShip; i++) {
      try {
        if(this.shipPosition) this.coordinates[item.x][item.y + i].hover = item.hover
        else this.coordinates[item.x + i][item.y].hover = item.hover
      } catch (e) {}
    }
  }
}
