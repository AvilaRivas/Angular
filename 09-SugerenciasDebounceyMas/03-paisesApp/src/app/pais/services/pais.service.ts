import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population');
  }
  constructor(private httpClient: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.httpClient.get<Country[]>(url, {params: this.httpParams})
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.httpClient.get<Country[]>(url, {params: this.httpParams})
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.httpClient.get<Country>(url)
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;   
    return this.httpClient.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
  }
}
