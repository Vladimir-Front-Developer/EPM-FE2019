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
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { GameTipsComponent } from './sea-battlefield/game-tips/game-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    SeaBattlefieldComponent,
    CoordinateGridComponent,
    ShipsComponent,
    GridSquareComponent,
    BattleHistoryComponent,
    ShipComponent,
    LoginComponent,
    GameTipsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
