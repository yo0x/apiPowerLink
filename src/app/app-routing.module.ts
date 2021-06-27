import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedComponent } from './sched/sched.component';
import { TmpSelectorComponent } from './tmp-selector/tmp-selector.component';
import { VerifyerComponent } from './verifyer/verifyer.component';

const routes: Routes = [
  {path: '', component: TmpSelectorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sched', component: SchedComponent},
  {path: 'verfi', component: VerifyerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
