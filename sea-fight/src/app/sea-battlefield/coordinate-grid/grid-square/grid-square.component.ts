import { Component, Input, OnInit } from '@angular/core';
import { GridSquareInterface } from "./grid-square.interface";

@Component({
  selector: 'app-grid-square',
  templateUrl: './grid-square.component.html',
  styleUrls: ['./grid-square.component.scss']
})
export class GridSquareComponent implements OnInit {
  @Input() squareData: GridSquareInterface

  constructor(){}

  ngOnInit(){
    // console.log(this.squareData)
  }
  clickSquare(){
    console.log(this.squareData)
  }
}
