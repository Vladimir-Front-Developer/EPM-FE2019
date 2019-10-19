import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-destroyer',
  templateUrl: './destroyer.component.html',
  styleUrls: ['./destroyer.component.scss']
})
export class DestroyerComponent implements OnInit {
  @Output() onSelectDestroyer: EventEmitter<any> = new EventEmitter<any>()
  destroyer: object = {
    type: 'destroyer',
    length: 2,
    qt: 3
  }
  constructor(){}
  ngOnInit(){}
  public selectShip(){
    this.onSelectDestroyer.emit(this.destroyer)
  }
}
