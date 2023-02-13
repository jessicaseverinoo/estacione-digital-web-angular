import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListVehiclesService {
  private url = "http"

  constructor(private httpClient: HttpClient) { }

  getAllVehicles() {
    return this.httpClient.get('url');
  }
}
