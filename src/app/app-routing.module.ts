import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterComponent } from './alter/alter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SchedComponent } from './sched/sched.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alter', component: AlterComponent},
  {path: 'sched', component: SchedComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
