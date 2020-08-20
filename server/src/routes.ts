import { mypageController } from './controller';
import { userController } from './controller';

export const AppRoutes = [
  {
    path: '/login',
    method: 'post',
    action: userController.login,
  },
  {
    path: '/root',
    method: 'get',
    action: mypageController.root,
  },
];
