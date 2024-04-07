import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { APIURL } from '../../core/constants/API.constants';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country.interface';
import { CountryPageComponent } from '../pages/country-page/country-page.component';
import { HttpClient } from '@angular/common/http';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {
    this.loadFromLocalStorage();
  }
  // * Injects
  private http: HttpClient = inject(HttpClient);

  private _cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: [],
    },
    byCountry: {
      term: '',
      countries: [],
    },
    byRegion: {
      term: '',
      countries: [],
    },
  };

  public get cacheStore(): CacheStore {
    return this._cacheStore;
  }

  private saveToLocaleStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this._cacheStore));
  }

  private loadFromLocalStorage(): void {
    if( !localStorage.getItem('cacheStore')) return;

    this._cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError((err) => of([]))
    );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url: string = `${APIURL}/capital/${term}`;

    return this.getCountriesRequest(url).pipe(
      tap((countries: Country[]) => {
        this._cacheStore.byCapital = { term, countries };
      }),
      tap(() => this.saveToLocaleStorage())
    );
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url: string = `${APIURL}/name/${term}`;

    return this.getCountriesRequest(url).pipe(
      tap((countries: Country[]) => {
        this._cacheStore.byCountry = { term, countries };
      }),
      tap(() => this.saveToLocaleStorage() )
    );
  }

  public searchRegion(term: Region): Observable<Country[]> {
    const url: string = `${APIURL}/region/${term}`;

    return this.getCountriesRequest(url).pipe(
      tap((countries: Country[]) => {
        this._cacheStore.byRegion = { term, countries };
      }),
      tap(() => this.saveToLocaleStorage())
    );
  }

  public getCountryInfo(term: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${APIURL}/alpha/${term}`).pipe(
      map((countries: Country[]) =>
        countries!.length > 0 ? countries![0] : null
      ),
      catchError(() => of(null))
    );
  }
}
