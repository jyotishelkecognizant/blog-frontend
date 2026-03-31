import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddBlog } from './pages/add-blog/add-blog';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import {Welcome} from './pages/welcome/welcome';

export const routes: Routes = [ 
   { path: 'welcome', component: Welcome },
   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'login', component: Login},
  { path: 'register', component: Register},
    {path:'home',component:Home},
  {path:'add',component:AddBlog}
];
