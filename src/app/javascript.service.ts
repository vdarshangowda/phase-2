import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavascriptService {

  constructor(private http : HttpClient) { }

  getJavascriptJson(){
    return this.http.get<any>("assets/javascript.json");
  }
}


