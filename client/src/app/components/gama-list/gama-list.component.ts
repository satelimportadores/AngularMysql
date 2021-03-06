import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService} from '../../services/games.service'
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-gama-list',
  templateUrl: './gama-list.component.html',
  styleUrls: ['./gama-list.component.css']
})
export class GamaListComponent implements OnInit {

  //Agregar un hostbinding para que cree columnas automaticamente
  @HostBinding('class') classes = 'row';
  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(){
    this.getGames();
  }

  //Funciones
  getGames(){
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }



  deleteGame(id: string){
     // console.log(id)
     this.gameService.deleteGame(id).subscribe(
       res => {
          this.getGames();
         console.log(res)
       },
       err => console.log(err)
     )
  }



}
