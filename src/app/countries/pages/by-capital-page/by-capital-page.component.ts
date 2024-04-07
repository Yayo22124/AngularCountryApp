import { Component, OnInit, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'ca-countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  // * Injects
  private countriesService: CountriesService = inject(CountriesService);

  // * Properties
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public searchTerm: string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.searchTerm = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string):void {
    this.isLoading = true;
    this.countriesService.searchCapital( term ).subscribe(
      (res: Country[]) => {
        console.log(res);
        this.countries = res;
        this.isLoading = false;
      });
  }
}
