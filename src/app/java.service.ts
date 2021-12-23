import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http : HttpClient) { }

  getJavaJson(){
    return this.http.get<any>("assets/java.json");
  }
}
