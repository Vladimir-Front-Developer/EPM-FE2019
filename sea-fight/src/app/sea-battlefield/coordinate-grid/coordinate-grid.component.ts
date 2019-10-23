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

  constructor(private coordinateGridService: CoordinateGridService, private cfgSvc: ConfigService){}

  ngOnInit(){
    this.cfgSvc.getGridSettings().subscribe(settings => {
      this.markupX = settings.markup.x
      this.markupY = settings.markup.y.split('')
      this.lengthGrid = settings.length
      this.coordinates = this.coordinateGridService.generateCoordinates(this.lengthGrid)
    })
  }

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
