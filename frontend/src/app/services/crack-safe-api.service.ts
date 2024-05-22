import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CrackSafeResponse, CrackSafeRequest } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CrackSafeApiService {
  constructor(private apiService: ApiService) {}

  crackSafe(
    url: string,
    body: CrackSafeRequest,
    params: any
  ): Observable<CrackSafeResponse> {
    return this.apiService.post(url, body, {
      headers: {},
      responseType: 'json',
    });
  }
}
