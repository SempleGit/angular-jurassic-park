import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from 'src/app/characters';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  private api = 'https://warm-reaches-88811.herokuapp.com';
  // private api = '/api';
  
  private charactersUrl = `${this.api}/characters`;

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl);
  }

  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url);
  }
}
