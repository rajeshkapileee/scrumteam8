import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

 
  transform(products,searchItem) {
    if(!products||!searchItem){
    return products;
  }
  return products.filter((products) => {
    return products.productName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  })

}
}
 
