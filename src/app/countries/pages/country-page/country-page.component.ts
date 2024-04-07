import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'ca-countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent  implements OnInit {
  // * Injects
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private countriesService: CountriesService = inject(CountriesService);

  public countryInfo?: Country | null;

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(({ id }) => this.countriesService.getCountryInfo( id ))
    )
    .subscribe(
      country => {
        if (!country) return this.router.navigateByUrl('');

        return this.countryInfo = country;
      }
    )
  }
}
