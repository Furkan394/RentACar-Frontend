export interface RentalDetailDto{
  rentalId:number,
  brandName:string,
  customerName:string,
  companyName:string,
  rentDate:Date,
  returnDate?:Date
}
