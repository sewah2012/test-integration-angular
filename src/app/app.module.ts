import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PetitMenuComponent } from './petit-menu/petit-menu.component';
import { GrandMenuComponent } from './grand-menu/grand-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlidToggleComponent } from './slid-toggle/slid-toggle.component';
import { ListingComponent } from './listing/listing.component';
import { AffectationService } from './affectation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { HistoryItemComponent } from './history-item/history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    PetitMenuComponent,
    GrandMenuComponent,
    SidebarComponent,
    SlidToggleComponent,
    ListingComponent,
    HistoryItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [AffectationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
