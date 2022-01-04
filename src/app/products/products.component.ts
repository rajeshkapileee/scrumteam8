import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;
  error : string;
  isLoading = false
  message: any;
  selectedProductToEdit: any;
  searchItem;
  @ViewChild('close')  closeButton:ElementRef;

  constructor(private prod : ProductService ,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.isLoading = true;
    this.prod.getProducts().subscribe((res)=>{
      this.isLoading = false;
      if(!res.error){
        this.message = 'products fetched'
        this.products = res.products;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
      else{
        this.error = "could not fetch the products";
      }
    }, err =>{
      this.isLoading = false;
      this.error = 'server error'
    })
  }

  onDelete(product){
   const confirmation = confirm ('Are you willing to Delete this product???')
   if (confirmation){
    this.prod.deleteProduct(product._id).subscribe((res)=>{
      if(!res.error){
        this.products.splice(this.products.indexOf(product),1)
      }
    })
   }
  }

  onEditProduct(product){
    this.selectedProductToEdit = product;
  
    
  }
  onFormSubmit(){
    this.prod.updateProduct(this.selectedProductToEdit._id,this.selectedProductToEdit).subscribe((res)=>{
      console.log(res);
      
      if (!res.error){
       this.closeButton.nativeElement.click();
        
      }
    })
  }
}