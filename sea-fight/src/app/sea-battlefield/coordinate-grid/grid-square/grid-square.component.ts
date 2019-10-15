import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-square',
  templateUrl: './grid-square.component.html',
  styleUrls: ['./grid-square.component.scss']
})
export class GridSquareComponent implements OnInit {
  @Input() coordinateX: number
  @Input() coordinateY: number

  ngOnInit() {
    console.log(this.coordinateX)
    console.log(this.coordinateY)
  }

}
