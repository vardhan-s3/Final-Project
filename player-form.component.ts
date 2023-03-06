import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
 
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
 
  playerForm: FormGroup;
  isEdit: boolean = false;
  playerId: string;
 
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService) { }
 
  ngOnInit(): void {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      team: ['', Validators.required]
    });
 
    this.route.paramMap.subscribe(params => {
      this.playerId = params.get('id');
      if (this.playerId) {
        this.isEdit = true;
        this.playerService.getPlayerById(this.playerId).subscribe(player => {
          this.playerForm.patchValue(player);
        });
      }
    });
  }
 
  onSubmit(): void {
    if (this.playerForm.valid) {
      const player: Player = this.playerForm.value;
      if (this.isEdit) {
        this.playerService.updatePlayer(this.playerId, player).subscribe(() => {
          this.router.navigateByUrl('/players');
        });
      } else {
        this.playerService.addPlayer(player).subscribe(() => {
          this.router.navigateByUrl('/players');
        });
      }
    }
  }
 
}
