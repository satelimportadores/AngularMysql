import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService} from '../../services/games.service';
import { ActivatedRoute,Router } from '@angular/router';

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

  edit: boolean = false;

  constructor(private gameService: GamesService,private router: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    //console.log(params);
      if (params.id) {
          this.gameService.getGame(params.id).subscribe(
            res=>{
              //console.log(res);
              this.game = res;
              this.edit = true;
            },
            err => console.log(err)
          )
        
      }
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

  updateGame(){
   // console.log(this.game);
   delete this.game.created_at;
   this.gameService.updateGame(this.game.id,this.game).subscribe(
     res =>{
      console.log(res);
      this.router.navigate(['/games']);
     },
       err => console.log(err)
   )


  }

}
