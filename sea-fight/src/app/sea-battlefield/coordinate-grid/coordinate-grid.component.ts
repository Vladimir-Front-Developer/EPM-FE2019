import { Component, Input, OnInit } from '@angular/core';
import { CoordinateGridService } from "./coordinate-grid.service";

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
  coordinates: object [][]

  constructor(private coordinateGridService: CoordinateGridService){
    this.coordinates = coordinateGridService.generateCoordinates(this.lengthGrid)
  }

  ngOnInit(){
  }
}
