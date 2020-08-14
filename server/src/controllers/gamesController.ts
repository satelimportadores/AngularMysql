import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
  
  public async list (req: Request, res: Response) {
      pool.query('SELECT * FROM games', function (err, result, fields) {
        if (err)
          throw err;
        res.json(result);
      });
  } 

  public listOne  (req : Request,res: Response){
   // res.json({text: 'Listando game'+ req.params.id});
   const {id} = req.params;
    pool.query('SELECT * FROM games WHERE id = ?',[id], function (err, result, fields) {
          if (result.length > 0 ) {
            res.json(result[0]);
          } else {
            res.status(404).json({text: 'Ningun game encontrado'});
          }
      });
    }

  public async create  (req : Request,res: Response):Promise<void>{
    pool.query('INSERT INTO games set ?', [req.body])
    res.json({text: 'Creating game'});
    //console.log(req.body);
   
  } 

  public delete  (req : Request,res: Response){
    const {id} = req.params;
    //res.json({text: 'Borrando game'+ req.params.id});
    pool.query('DELETE FROM games WHERE id = ?', [id]);
      res.json({message: 'The game was-deleted');
  } 

  public update  (req : Request,res: Response){
    
    const {id} = req.params;
    pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({message: 'Actualizando game '+ req.params.id});
  } 



}

const gamesController = new GamesController();
export default gamesController;