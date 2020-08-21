import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Application, Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { AppRoutes } from './routes';
import { connectionOptions } from './ormconfig';

createConnection(connectionOptions)
  .then(async (connection) => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.agee = 25;
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);
    //====================해석 필요=======================
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
