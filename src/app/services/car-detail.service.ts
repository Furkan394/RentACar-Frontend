import { CarDetail } from './../models/carDetail/carDetail';
import { BaseUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/responses/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getcardetails?carId"+carId)
  }

}
