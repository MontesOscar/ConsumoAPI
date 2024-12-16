import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
API_URL :string ='https://rickandmortyapi.com/api/character'
  constructor(private httpClient :HttpClient) {}
  getPokemon(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
  getPokemonById(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${id}`); 
  }
}
