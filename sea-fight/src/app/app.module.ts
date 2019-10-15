import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeaBattlefieldComponent } from './sea-battlefield/sea-battlefield.component';
import { CoordinateGridComponent } from './sea-battlefield/coordinate-grid/coordinate-grid.component';
import { ShipsComponent } from './sea-battlefield/ships/ships.component';
import { GridSquareComponent } from './sea-battlefield/coordinate-grid/grid-square/grid-square.component';
import { BattleshipComponent } from './sea-battlefield/ships/battleship/battleship.component';
import { CruiserComponent } from './sea-battlefield/ships/cruiser/cruiser.component';
import { DestroyerComponent } from './sea-battlefield/ships/destroyer/destroyer.component';
import { TorpedoBoatComponent } from './sea-battlefield/ships/torpedo-boat/torpedo-boat.component';
import { CaircraftCarrierComponent } from './sea-battlefield/ships/caircraft-carrier/caircraft-carrier.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BattleHistoryComponent } from './sea-battlefield/battle-history/battle-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SeaBattlefieldComponent,
    CoordinateGridComponent,
    ShipsComponent,
    GridSquareComponent,
    BattleshipComponent,
    CruiserComponent,
    DestroyerComponent,
    TorpedoBoatComponent,
    CaircraftCarrierComponent,
    BattleHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
