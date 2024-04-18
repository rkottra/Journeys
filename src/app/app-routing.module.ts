import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { JourneysComponent } from './journeys/journeys.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "registration/:id",
    component: RegistrationComponent
  },
  {
    path: "journeys",
    component: JourneysComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
