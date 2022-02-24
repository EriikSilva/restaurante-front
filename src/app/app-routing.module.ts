import { SaltyComponent } from './components/salty/salty.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"  
  },{
    path: "salty",
    component: SaltyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
