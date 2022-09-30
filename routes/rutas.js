import {query, Request, Response} from 'express';
import mysql from 'mysql2/promise';


class GamesController{
    public async list(req: Request, res:Response): Promise <any> {
        const games = await pool.promise().query('SELECT * FROM games');
        res.json(games);
    }