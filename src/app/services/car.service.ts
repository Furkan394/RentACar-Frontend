import { CarDetailDto } from './../models/dtos/carDetailDto';
import { apiUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/responses/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(apiUrl + "cars/getall")
  }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(apiUrl + "cars/getcardetails")
  }
}
