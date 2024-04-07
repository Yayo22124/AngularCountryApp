import { Component, OnInit, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'ca-countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent implements OnInit {
  // * Injects
  private countriesService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];
  public regions: Region[] = ["America", "Africa", "Oceania", "Europe", "Asia"]
  public selectedRegion: Region = '';
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  public searchByRegion( region: Region ): void {
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(
      (res: Country[]) => {
        this.countries = res;
        this.isLoading = false;
      }
    )
  }

}
