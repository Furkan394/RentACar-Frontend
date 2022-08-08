import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarDetailComponent},
  {path:"cars", component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarDetailComponent},
  {path:"cars/color/:colorId", component:CarDetailComponent},
  {path:"cars/car/:carId", component:CarDetailComponent},
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
