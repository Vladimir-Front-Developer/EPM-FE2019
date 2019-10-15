import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinate-grid',
  templateUrl: './coordinate-grid.component.html',
  styleUrls: ['./coordinate-grid.component.scss']
})
export class CoordinateGridComponent implements OnInit {
  @Input() user: string
  markupX: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  markupYlength: string = ' 0123456789'
  markupY: Array<string> = this.markupYlength.split('')
  lengthGrid: number = 10
  coordinates: null | object [][] // object нужно заменить на interface

  constructor(){}

  ngOnInit(){
    this.coordinates = this.generateEmptyCoordinates(this.lengthGrid)
  }

  generateEmptyCoordinates(num: number){
    return new Array(num)
      .fill(null, 0, num)
      .map((el, idx) => new Array(num).fill(idx, 0, num))
  }

}
