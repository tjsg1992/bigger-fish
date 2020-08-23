import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishInventoryComponent } from './fish-inventory/fish-inventory.component';
import { FishingZoneComponent } from './fishing-zone/fishing-zone.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FishingActionComponent } from './fishing-action/fishing-action.component';

@NgModule({
  declarations: [
    AppComponent,
    FishInventoryComponent,
    FishingZoneComponent,
    FishingActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
