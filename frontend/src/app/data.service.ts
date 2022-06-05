import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

type Ping = {
  text: string;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  ping: Ping[] = [];
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPing(): Observable<Ping[]> {
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.get<Ping[]>(`${this.url}/ping`, httpOptions);
  }
}
