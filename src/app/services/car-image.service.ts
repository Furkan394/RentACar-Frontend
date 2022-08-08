import { CarImage } from './../models/entities/carImage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { ApiUrl } from '../models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(ApiUrl + "carimages/getall")
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(ApiUrl + "cars/getimagesbycarid?carId="+carId)
  }

  getCarImageById(id:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(ApiUrl + "cars/getbyid?id="+id)
  }
}
