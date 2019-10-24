import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridSquareInterface } from "./grid-square.interface";

@Component({
  selector: 'app-grid-square',
  templateUrl: './grid-square.component.html',
  styleUrls: ['./grid-square.component.scss']
})
export class GridSquareComponent implements OnInit {
  @Input() squareData: GridSquareInterface
  @Output() onClickSquare: EventEmitter<any> = new EventEmitter<any>()
  @Output() onMouseenterSquare: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit(){}

  clickSquare(){
    this.onClickSquare.emit(this.squareData)
  }

  hoverSquare(hover: boolean){
    if(this.squareData.user === 'PC') return
    this.squareData.hover = hover
    this.onMouseenterSquare.emit(this.squareData)
  }
}
