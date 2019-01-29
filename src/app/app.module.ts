import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
	PfeComponent,
    DashboardComponent,
    PretsComponent,
    PretsAddComponent,
	PfesAddComponent,
    LivresComponent,
    LivresAddComponent,
    UserComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
