import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player';
 
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
 
  playerId: string;
  player: Player;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerId = params.get('id');
      this.http.get<Player>(`/api/players/${this.playerId}`).subscribe(data => {
        this.player = data;
      });
    });
  }
 
  updatePlayer() {
    this.http.put(`/api/players/${this.playerId}`, this.player).subscribe(() => {
      console.log('Player updated successfully');
      this.router.navigate(['/players']);
    });
  }
 
}
