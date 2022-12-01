import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {
  
  constructor(public http: HttpClient) { }
  obtenerDatos<T> (url : string){

     url = 'https://jsonplaceholder.typicode.com/users'
     return this.http.get<T[]>(url);
     
    }
}
