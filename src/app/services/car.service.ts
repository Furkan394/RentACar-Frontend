import { BaseUrl } from './../models/constants/urls';
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
    return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getall")
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getbybrandid?brandId="+brandId)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getbycolorid?colorId="+colorId)
  }
}
