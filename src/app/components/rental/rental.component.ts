import { RentalDetailDto } from './../../models/dtos/rentalDetailDto';
import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetailDtos:RentalDetailDto[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDetailDtos = response.data
    })
  }

}