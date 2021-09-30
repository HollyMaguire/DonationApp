import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';
import { GiftsComponent } from './gifts/gifts.component';
import { DonationManagmentComponent} from './donation-managment/donation-managment.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AuthguardService } from './auth.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'infoForm', component: InfoFormComponent},
  {path: 'gift', component: GiftsComponent},
  {path:'users', component: UserManagmentComponent, canActivate:[AuthguardService]},
  {path: '', component: DonationManagmentComponent, canActivate:[AuthguardService]},
  {path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
