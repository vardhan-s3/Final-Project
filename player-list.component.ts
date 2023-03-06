import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player';
 
@Component({
  selector:
'app-player-list',
 templateUrl: './player-list.component.html',
 styleUrls: ['./player-list.component.css']
 })
 export class PlayerListComponent implements OnInit {
players: Player[];
constructor(private http: HttpClient) { }
ngOnInit() {
 this.http.get<Player[]>('/api/players').subscribe(data => {
 this.players = data;
 });
 }
deletePlayer(id: string) {
 this.http.delete(/api/players/${id}).subscribe(() => {
 this.players = this.players.filter(p => p._id !== id);
 });
 }
}
