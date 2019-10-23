import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeaBattlefieldComponent } from './sea-battlefield/sea-battlefield.component';
import { CoordinateGridComponent } from './sea-battlefield/coordinate-grid/coordinate-grid.component';
import { ShipsComponent } from './sea-battlefield/ships/ships.component';
import { GridSquareComponent } from './sea-battlefield/coordinate-grid/grid-square/grid-square.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BattleHistoryComponent } from './sea-battlefield/battle-history/battle-history.component';
import { HttpClientModule } from '@angular/common/http';
import { ShipComponent } from './sea-battlefield/ships/ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    SeaBattlefieldComponent,
    CoordinateGridComponent,
    ShipsComponent,
    GridSquareComponent,
    BattleHistoryComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
