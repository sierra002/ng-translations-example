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
    const url  = 'https://gist.githubusercontent.com/sierra002/f0b10026d986f3de3f8d36783c8f3314/raw/5c9125097717ff20076b0ddf767167bab5e72a3e/gistfile1.txt';
    return this.httpClient.get(url);
  }
}
