import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';



export interface Theme {
  theme_id: number;
  theme_name: string;
}

export interface Resposta {
  status:  string;
  themes: Theme[];
}

@Injectable({
  providedIn: 'root'
})
export class AvaliarTemasService {

  url = 'https://emquemvotar-api-heroku.herokuapp.com//api/theme/all';

  constructor(private http: HttpClient) { }

  getThemesAll() {
    return this.http.get<Resposta>(this.url)
    .pipe(
      retry(3)
    );
  }

}
