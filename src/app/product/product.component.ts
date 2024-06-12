import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private productservice: ProductService){}
  products: IProduct[]= [];
  ngOnInit() {
    this.productservice.GetAllProduct().subscribe(
      data=>{
        this.products=data
      },
      err=> {
        console.log(err)
      }
    )
  }
  DeleteProduct = (id:any)=> {
    if(confirm('ban co chac chan muon xoa khong?')){
    this.productservice.DeleteProduct(id).subscribe(
      data=>{
        alert('xoa thanh cong')
        this.products = this.products.filter(product=> product.id!==id)
      },
      err=> {
        console.log(err)
      }
    )
  }
}

}
