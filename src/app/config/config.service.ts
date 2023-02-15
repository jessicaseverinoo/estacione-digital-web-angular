import { User } from './../login/models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'https://api-estacionamento-digital.herokuapp.com';

  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  postLogin(path: string, payload: User): Observable<User> {
    return this.http.post<any>(
      `${this.configUrl}/${path}`,
      payload,
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      })
    .pipe(catchError(this.handleError))
  }
}
