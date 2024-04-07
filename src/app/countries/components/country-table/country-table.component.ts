import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'ca-countries-table',
  templateUrl: './country-table.component.html',
  styles: `
    .country-flag {
      width: 50px;
      height: 30px;
    }
  `
})
export class CountryTableComponent {
  @Input({required: true})
  public countries: Country[] = [];
}
