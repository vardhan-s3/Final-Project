import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player';
 
@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {
 
  player: Player = { name: '', country: '' };
 
  constructor(private http: HttpClient) { }
 
  createPlayer() {
    this.http.post('/api/players', this.player).subscribe(() => {
      console.log('Player created successfully');
      this.player = { name: '', country: '' };
    });
  }
 
}
