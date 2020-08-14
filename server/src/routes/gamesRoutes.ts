import {Router} from "express";

import  gamesController  from '../controllers/gamesController';

class GamesRoutes {
    public  router: Router = Router();
  constructor(){
    this.config();
  }
  config():void{
    this.router.get('/',gamesController.list);
    this.router.get('/:id',gamesController.listOne);
    this.router.post('/',gamesController.create);
    this.router.put('/:id',gamesController.update);
    this.router.delete('/:id',gamesController.delete);
  }
}
import { format } from "morgan";

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;