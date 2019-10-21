import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IHero } from "./heroes.interface";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<any | IHero[]> {
    const url  = 'https://gist.githubusercontent.com/sierra002/f0b10026d986f3de3f8d36783c8f3314/raw/ae03f62036885ba2db37837434840d30742367bc/gistfile1.txt';
    return this.httpClient.get(url);
  }
}
