import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient) { }

  getHeroes() {
    const url  = 'https://gist.githubusercontent.com/Nahtanoj-hz/8225501e8c4876b592e98f936ecdd480/raw/1ad5029402579f5b31663b20a9a0a694c25e3eeb/heroes.json';
    return this.httpClient.get(url);
  }
}
