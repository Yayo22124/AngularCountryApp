import { Router, RouterLink } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    RouterLink
  ]
})
export class CountriesModule { }
