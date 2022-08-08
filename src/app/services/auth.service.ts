import { RegisterModel } from './../models/registerModel';
import { ApiUrl } from './../models/constants/urls';
import { SingleResponseModel } from './../models/responses/singleResponseModel';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(ApiUrl + "auth/login", loginModel)
  }

  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(ApiUrl + "auth/register", registerModel)
  }

  handleToken(token: string) {
    let encodedToken = token;
    this.decodedToken = this.jwtHelper.decodeToken(encodedToken);

  }
  getName(){
    let token:string = localStorage.getItem("token")
    if (token) {
      let decoded = this.jwtHelper.decodeToken(token)
      let userName = Object.keys(decoded).filter(x => x.endsWith("/name"))[0];
      return decoded[userName];
    }
    return null

  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }else{
      return false;
    }
  }
}
