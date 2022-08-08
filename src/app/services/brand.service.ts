import { ApiUrl } from './../models/constants/urls';
import { Observable } from 'rxjs';
import { Brand } from './../models/entities/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(ApiUrl + "brands/getall")
  }

}
