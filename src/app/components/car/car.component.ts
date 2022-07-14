import { CarDetailDto } from './../../models/dtos/carDetailDto';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetailDtos:CarDetailDto[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetailDtos = response.data
    })
  }
}
