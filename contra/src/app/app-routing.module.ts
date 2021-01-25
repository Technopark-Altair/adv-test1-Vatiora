import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {path: "car/:id", component: CarComponent},
  {path: "carList", component: CarListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
