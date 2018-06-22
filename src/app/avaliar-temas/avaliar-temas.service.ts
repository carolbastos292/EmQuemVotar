import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

export  interface Theme {
  id: number;
  name: string;
}

export interface Resposta {
  status:  string;
  themes: Theme[];
}


@Injectable()
export class AvaliarTemasService {

  constructor(private  http: HttpClient) { }

  url = 'http://127.0.0.1:5000/api/theme/all';

  getThemesAll() {
    return this.http.get(this.url, {responseType: 'json'} )
    .pipe(
      retry(3)
    );
  }

}
