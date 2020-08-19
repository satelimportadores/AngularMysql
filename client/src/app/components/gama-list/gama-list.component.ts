import { Component, OnInit } from '@angular/core';
import { GamesService} from '../../services/games.service'
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-gama-list',
  templateUrl: './gama-list.component.html',
  styleUrls: ['./gama-list.component.css']
})
export class GamaListComponent implements OnInit {

  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(){
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

}
