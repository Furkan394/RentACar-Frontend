import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Color } from './../../models/entities/color';
import { Brand } from './../../models/entities/brand';
import { Car } from './../../models/entities/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[]
  currentCar:Car
  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params=>{
    //   if(params["brandId"]){
    //     this.getCarsByBrand(params["brandId"])
    //   }
    //   else if(params["colorId"]){
    //     this.getCarsByColor(params["colorId"])
    //   }else{
    //     this.getCars()
    //   }
    // })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
    })
  }

  setButtonDetail(car:Car){
    this.currentCar=car
  }

  getCurrentButtonClass(car:Car){
      if (this.currentCar==car) {
        return '"btn btn-primary"'
      }
      else{
        return '"btn btn-primary"'
      }
  }
}
