import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {
  
  constructor(public http: HttpClient) {}
   



    // esto es para optener los datos desde una api 
  obtenerDatos<T> (url : string){

     url = 'https://jsonplaceholder.typicode.com/users'
     return this.http.get<T[]>(url);
     
    }
}
