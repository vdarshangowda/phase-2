import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor(private http : HttpClient) { }

  getHtmlJson(){
    return this.http.get<any>("assets/html.json");
  }
}

