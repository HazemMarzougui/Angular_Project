import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { ResidencesComponent } from './residences/residences.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:residenceId', component: ApartmentsByResidenceComponent },
  { path: 'add-apartment', component: AddApartmentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
