import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  apiURL = environment.apiURL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  createPassword(
    numberOfPermissions: number,
    expiration_date: Date
  ): Observable<any> {
    let payload = {
      number_of_permissions: numberOfPermissions,
      expiration_date: expiration_date,
    };

    return this.httpClient.post<any>(
      `${this.apiURL}/generate-password`,
      payload,
      this.httpOptions
    );
  }

  retrievePassword(id: string): Observable<any> {
    let payload = {
      id: id,
    };

    return this.httpClient.post<any>(
      `${this.apiURL}/password-retrieve`,
      payload,
      this.httpOptions
    );
  }
}
