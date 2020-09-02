import { mypageController } from './controller';
import { userController } from './controller';

export const AppRoutes = [
  {
    path: '/login',
    method: 'post',
    action: userController.login.post,
  },
  {
    path: '/signup',
    method: 'post',
    action: userController.signup.post,
  },
  {
    path: '/signout',
    method: 'post',
    action: userController.signout.post,
  },
  {
    path: '/main',
    method: 'get',
    action: mypageController.main.get,
  },
  {
    path: '/goal',
    method: 'post',
    action: mypageController.goal.post,
  },
  {
    path: '/videolist',
    method: 'get',
    action: mypageController.videolist.get,
  },
  {
    path: '/todobox',
    method: 'post',
    action: mypageController.todobox.post,
  },
  {
    path: '/achieve',
    method: 'get',
    action: mypageController.achieve.get,
  },
  {
    path: '/progress',
    method: 'get',
    action: mypageController.progress.get,
  },
];
