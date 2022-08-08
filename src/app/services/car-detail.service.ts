import { CarDetail } from './../models/carDetail/carDetail';
import { ApiUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/responses/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getAllCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(ApiUrl + "cars/getcardetails")
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(ApiUrl + "cars/getcardetailsbycarid?carId="+carId)
  }

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(ApiUrl + "cars/getcardetailsbybrandid?brandId="+brandId)
  }
  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(ApiUrl + "cars/getcardetailsbycolorid?colorId="+colorId)
  }

}
