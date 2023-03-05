import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';
 
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  private apiUrl = 'http://localhost:3000/api';
 
  constructor(private http: HttpClient) { }
 
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/players`);
  }
 
  getPlayerByAge(country: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/players/country/${country}`);
  }
 
  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}/players`, player);
  }
 
  deletePlayer(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/players/${id}`);
  }
 
  updatePlayer(id: string, player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/players/${id}`, player);
  }
}
