import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LFBootstrapThemeModule} from '@lightweightform/bootstrap-theme';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';
import { FoodComponent } from './components/food/food.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { OtherGuestsComponent } from './components/reservation-detail/components/other-guests/other-guests.component';
import { AccommodationComponent } from './components/reservation-detail/components/accommodation/accommodation.component';
import { FoodTableComponent } from './components/food/food-table/food-table.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailComponent,
    FoodComponent,
    OtherServicesComponent,
    OtherGuestsComponent,
    AccommodationComponent,
    FoodTableComponent
  ],
  imports: [
    BrowserModule,
    LFBootstrapThemeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
