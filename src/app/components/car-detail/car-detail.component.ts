import { ToastrService } from 'ngx-toastr';
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
  carDetails: CarDetail[] = [];
  currentCar: Car;
  car: Car[];
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarDetailsByColorId(params["colorId"])
      }
      else if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"])
      }else{
        this.getAllCarDetails()
      }
    })
  }

  getAllCarDetails() {
    this.carDetailService.getAllCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(
      (response) => {
        this.carDetails = response.data;
      }
    );
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carDetailService.getCarDetailsByBrandId(brandId).subscribe(
      (response) => {
        this.carDetails = response.data;
      }
    );
  }

  getCarDetailsByColorId(colorId: number) {
    this.carDetailService.getCarDetailsByColorId(colorId).subscribe(
      (response) => {
        this.carDetails = response.data;
      }
    );
  }
  // setButtonHomePage(currentCarDetail: CarDetail) {
  //   this.currentCar = currentCarDetail;
  // }

  // getButtonHomePageClass(currentCar: Car) {
  //   return '"btn btn-primary"';
  // }
}
