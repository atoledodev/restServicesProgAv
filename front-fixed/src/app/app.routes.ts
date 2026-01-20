import { Routes } from '@angular/router';
import { GetUser } from './get-user/get-user';
import { CreateUser } from './create-user/create-user';
import { FindAllUsers } from './find-all-users/find-all-users';
import { FindUserById } from './find-user-by-id/find-user-by-id';

export const routes: Routes = [
  { path: 'getUser', component: GetUser, pathMatch: 'full' },
  { path: 'createUser', component: CreateUser, pathMatch: 'full' },
  { path: 'getAll', component: FindAllUsers, pathMatch: 'full' },
  { path: 'getUserById', component: FindUserById, pathMatch: 'full' },
];
