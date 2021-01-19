import { Productor } from './../modelo/Productor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'productores');
  }

  getOne(idactividad: number): Observable<any> {
    return this._http.get(this.url + 'productores/' + idactividad);
  }

  create(data: Productor): Observable<any> {
    let params = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'productores', params, { headers: headers });
  }

  delete(idactividad: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'productores/' + idactividad, { headers: headers });
  }
}
