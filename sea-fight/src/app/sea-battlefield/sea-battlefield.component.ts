import { Component } from '@angular/core';

@Component({
  selector: 'app-sea-battlefield',
  templateUrl: './sea-battlefield.component.html',
  styleUrls: ['./sea-battlefield.component.scss']
})
export class SeaBattlefieldComponent {
  public player: string = 'Player'
  public enemy: string = 'PC'
}
