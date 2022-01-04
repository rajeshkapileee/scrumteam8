import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  isLoading = false;
  message;
  error;
  constructor(private prod:ProductService) { }

  ngOnInit(): void {
  }
onSubmit(form : NgForm){
  this.isLoading = true;
  this.prod.addProduct(form.value).subscribe((res) => {
    this.isLoading = false;
    if(!res.error){
      this.message = 'Product added successfully';
      setTimeout(() => {
        this.message = '';
      },5000);
    }
    else{
      this.error = 'Failed to add product'
    }
  },err => {
    this.isLoading = false;
    this.error = 'Server Error'
  })


}
}