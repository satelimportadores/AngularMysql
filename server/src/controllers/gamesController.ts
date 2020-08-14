import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
 public list  (req : Request,res: Response){
  res.json({text: 'Listando games'});
  } 

  public listOne  (req : Request,res: Response){
    res.json({text: 'Listando game'+ req.params.id});
    }

  public async create  (req : Request,res: Response):Promise<void>{
    await pool.query('INSERT INTO games set ?',[req.body])
    res.json({text: 'Creating game'});
    console.log(req.body);
   
  } 

  public delete  (req : Request,res: Response){
    res.json({text: 'Borrando game'+ req.params.id});
  } 

  public update  (req : Request,res: Response){
    res.json({text: 'Actualizando game'+ req.params.id});
  } 



}

const gamesController = new GamesController();
export default gamesController;