import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AkiraComponent } from './akira/akira.component';
import { BigboybrwnComponent } from './bigboybrwn/bigboybrwn.component';
import { BuccattaComponent } from './buccatta/buccatta.component';
import { IamsinistermercComponent } from './iamsinistermerc/iamsinistermerc.component';
import { IconComponent } from './icon/icon.component';
import { RobboozecruiseComponent } from './robboozecruise/robboozecruise.component';
import { SmokedcorndoggComponent } from './smokedcorndogg/smokedcorndogg.component';
import { SnekprincessComponent } from './snekprincess/snekprincess.component';
import { StedyhandzComponent } from './stedyhandz/stedyhandz.component';
import { TheboombapComponent } from './theboombap/theboombap.component';


@NgModule({
  declarations: [
    AppComponent,
    AkiraComponent,
    BigboybrwnComponent,
    BuccattaComponent,
    IamsinistermercComponent,
    IconComponent,
    RobboozecruiseComponent,
    SmokedcorndoggComponent,
    SnekprincessComponent,
    StedyhandzComponent,
    TheboombapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
