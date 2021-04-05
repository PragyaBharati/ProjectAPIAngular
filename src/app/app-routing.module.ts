import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import{DetailsComponent} from './details/details.component'
import{LabourComponent} from './labour/labour.component'
import{AdminComponent} from './admin/admin.component'
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'details',component:DetailsComponent},
  {path:'labour',component:LabourComponent},
  {path:'admin',component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
