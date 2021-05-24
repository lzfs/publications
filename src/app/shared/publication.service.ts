import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private api = 'https://athene-forschung.rz.unibw-muenchen.de/services/export/node/92555';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Response>(`${this.api}/children/?format=json`);
  }

  getCount(count: number): Observable<any> {
    return this.http.get<Response>(`${this.api}/children/?format=json&limit=${count}`);
  }

  getX(param: string): Observable<any> {
    param = param.replace(' ', '%20')
    return this.http.get<Response>(`${this.api}/children/?format=json&q=${param}`);
  }
}
