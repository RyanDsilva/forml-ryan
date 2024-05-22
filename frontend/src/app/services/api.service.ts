import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrackSafeRequest, Options } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  post<T>(url: string, body: CrackSafeRequest, options: Options): Observable<T> {
    return this.httpClient.post(url, body, options) as Observable<T>;
  }
}
