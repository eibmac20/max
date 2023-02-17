import express,{Request, Response} from 'express';
import {ITodo} from "../model/ITodo";

let router = express.Router();

let todos:ITodo[] = [
  {
    name:"Test", description:"Lorem ipsum ..."
  },
  {
    name:"Have Fun", description:"Enjoy my holidays!!!"
  }
]


router.get('/', (req:Request, res:Response) => {
  res.send(todos);
});

module.exports = router;