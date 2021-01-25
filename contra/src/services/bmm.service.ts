import { Car } from './../models/car.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmmService {

  cars: Array<Car> =
  [
    {id: 0, brandName: 'Ford', modelName: 'Focus', priceInRub: 700000},
    {id: 1, brandName: 'BMW', modelName: 'M5', priceInRub: 8000000},
    {id: 2, brandName: 'Mazda', modelName: 'cx5', priceInRub: 2000000},
  ];
  constructor() { }

  getcars()
  {
    return this.cars;
  }
  getcar(id: number)
  {
    return this.cars.find((el) => el.id === id);
  }
}
