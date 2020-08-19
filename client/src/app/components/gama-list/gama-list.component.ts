import { Component, OnInit } from '@angular/core';
import { GamesService} from '../../services/games.service'

@Component({
  selector: 'app-gama-list',
  templateUrl: './gama-list.component.html',
  styleUrls: ['./gama-list.component.css']
})
export class GamaListComponent implements OnInit {

  constructor(private gameService: GamesService) { }

  ngOnInit(){
    this.gameService.getGames().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
