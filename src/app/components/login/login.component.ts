import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private authService:AuthService,
              private router:Router,
              private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  login(){
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        this.authService.handleToken(response.data.token)
          this.localStorageService.setLocal('token',response.data.token)
          this.localStorageService.setLocal('email',this.loginForm.value.email);
          this.router.navigate([""])
      }, responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }
}
