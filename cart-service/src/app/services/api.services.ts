import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

constructor(private http: HttpClient) { } 
getAllItems  = () => this.http.get('http://localhost:7777/cart');

}
