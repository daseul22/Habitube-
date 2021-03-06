import 'reflect-metadata';
import { createConnection, Repository, AfterLoad } from 'typeorm';
import { Application, Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { connectionOptions } from './ormconfig';
import { User } from './entity/User';
import { Todobox } from './entity/Todobox';
import { AppRoutes } from './routes';

createConnection(connectionOptions)
  .then(async (connection) => {
    console.log('Inserting a new user into the database...');
    //let userAll = await connection.query(`select * from user`);
    //console.log(userAll);
    //await Todobox.ClearDB();
    const todobox = new Todobox();
    todobox.memoTitle = 'hhh';
    todobox.memoContents = 'kkkkk';
    todobox.youtubeInfo = { 3: 3 };
    todobox.date = '10';
    await todobox.save();

    const user = new User();
    user.email = 'Timber';
    user.username = 'Saw';
    user.password = '25';
    user.todoboxes = [todobox];
    await user.save();

    console.log('Saved a new user with id: ' + user.id);
    console.log('Loading users from the database...');
    const users = await User.find();
    console.log('Loaded users: ', users);
    const join = await Todobox.JoinByUserId(2);
    console.log('leftjoin : ', join);
    //==================== test =======================
    const app: Application = express();
    app.use(
      cors({
        origin: 'http://localhost:4000',
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
      }),
    );
    app.use(bodyParser.json());
    app['get']('/', (req: Request, res: Response) => {
      res.status(200).send('Sucess');
    });

    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        },
      );
    });

    app.listen(3000, () => {
      console.log(`app is listening is PORT 3000`);
    });
  })
  .catch((error) => console.log(error));
