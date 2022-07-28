import { CarDetail } from './../../models/carDetail/carDetail';
import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from './../../services/car-detail.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[]=[];
  currentCar: Car;
  car: Car[];
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
      }
    });
  }

  getAllCarDetails() {
    this.carDetailService.getAllCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carDetailService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  setButtonHomePage(currentCar: Car) {
    this.currentCar = currentCar;
  }

  getButtonHomePageClass(currentCar: Car) {
    return '"btn btn-primary"';
  }
}
