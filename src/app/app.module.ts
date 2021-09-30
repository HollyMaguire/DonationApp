import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { GiftsComponent } from './gifts/gifts.component';
import { DonationManagmentComponent } from './donation-managment/donation-managment.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    InfoFormComponent,
    GiftsComponent,
    DonationManagmentComponent,
    NavBarComponent,
    UserManagmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
