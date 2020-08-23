import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishInventoryComponent } from './fish-inventory/fish-inventory.component';
import { FishingZoneComponent } from './fishing-zone/fishing-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    FishInventoryComponent,
    FishingZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
