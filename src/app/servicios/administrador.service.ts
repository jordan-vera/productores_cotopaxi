import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
    providedIn: 'root'
})
export class AdministradorService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    getOne(idadmin: number): Observable<any> {
        return this._http.get(this.url + 'admin/' + idadmin);
    }

    login(user: string, clave: string): Observable<any> {
        return this._http.get(this.url + 'login/' + encodeURIComponent(user) + '/' + encodeURIComponent(clave));
    }

}
