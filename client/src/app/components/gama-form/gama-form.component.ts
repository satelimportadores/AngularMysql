import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService} from '../../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gama-form',
  templateUrl: './gama-form.component.html',
  styleUrls: ['./gama-form.component.css']
})
export class GamaFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(private gameService: GamesService,private router: Router) { }

  ngOnInit(): void {
  }

  saveNewGame(){
    //console.log(this.game);
    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
        err => console.log(err)
    )

  }

}
