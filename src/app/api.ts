import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Api {

constructor(private http: HttpClient) {}

getProducts():Observable<any> {
  return this.http.get('http://localhost:3000/api/v1/products');
  
}
}
