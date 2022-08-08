import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { User } from '../models/entities/user';
import { SingleResponseModel } from '../models/responses/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getById(id:number): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(ApiUrl + "users/getbyid?id="+id);
  }

}
