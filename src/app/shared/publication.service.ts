import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from './publication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private api = 'https://athene-forschung.rz.unibw-muenchen.de/services/export/node/92555';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.api}/allchildren`);
  }
}
