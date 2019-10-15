import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public shipsList: Array<object> = [
    {
      type: "aircraft-carrier",
      numSquare: 5,
      countShips: 1
    },
    {
      type: "battleship",
      numSquare: 4,
      countShips: 2
    },
    {
      type: "cruiser",
      numSquare: 3,
      countShips: 3
    },
    {
      type: "destroyers",
      numSquare: 2,
      countShips: 4
    },
    {
      type: "torpedo-boots",
      numSquare: 1,
      countShips: 5
    }
  ]
  constructor() { }
  ngOnInit() {
  }
}
