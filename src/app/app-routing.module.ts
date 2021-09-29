import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';
import { GiftsComponent } from './gifts/gifts.component';

const routes: Routes = [
  {path: 'infoForm', component: InfoFormComponent},
  {path: 'gift', component: GiftsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
