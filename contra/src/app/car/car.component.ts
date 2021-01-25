import { BmmService } from './../../services/bmm.service';
import { Car } from './../../models/car.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carservice: BmmService, private route: ActivatedRoute) { }

  car: Car;
  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => 
      {
        let id = +data.id;
        this.car = this.carservice.getcar(id);
      }
    );
  }

}
