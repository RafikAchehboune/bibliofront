import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './users/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PretsComponent } from './dashboard/prets/prets.component';
import { PretsAddComponent } from './dashboard/prets/prets-add/prets-add.component';
import { LivresComponent } from './dashboard/livres/livres.component';
import { LivresAddComponent } from './dashboard/livres/livres-add/livres-add.component';
import { UserAddComponent } from './users/user/user-add/user-add.component';
import { PfeAddComponent } from './dashboard/pfes/pfes-add/pfes-add.component';
import { PfesComponent } from './dashboard/pfes/pfes.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'prets', component: PretsComponent},
  {path: 'addPret', component: PretsAddComponent},
  {path: 'livres', component: LivresComponent},
  {path: 'addLivre', component: LivresAddComponent},
   {path: 'pfes', component: pfesComponent},
  {path: 'addPfe', component: pfesAddComponent},
  {path: 'users', component: UserComponent},
  {path: 'addUser', component: UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
