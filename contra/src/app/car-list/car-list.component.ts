import { Car } from './../../models/car.module';
import { BmmService } from './../../services/bmm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car>;
  constructor(private carsService: BmmService) { }

  ngOnInit(): void
  {
    this.cars = this.carsService.getcars();
  }
}