import { Component, OnInit, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'ca-countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  // * Injects
  private countriesService: CountriesService = inject(CountriesService);
  public countries: Country[] = [];
  public searchTerm: string = "";
  public isLoading: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.searchTerm = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(
      (res: Country[]) => {
        this.countries = res;
        this.isLoading = false;
      }
    )
  }
}
