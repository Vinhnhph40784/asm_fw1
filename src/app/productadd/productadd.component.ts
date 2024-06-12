import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
   constructor(private productservice: ProductService){}
   productform = new FormGroup({
    name: new FormControl(),
    year: new FormControl(),
    price: new FormControl(),
    tacgia: new FormControl(),
   })
   router = new Router();
   onAddProduct = ()=> {
    this.productservice.AddProduct(this.productform.value as IProduct).subscribe(
      data=>{
        alert('them moi thanh cong');
        this.router.navigate(['book']);
      },
      err=> {
        console.log(err)
      }
    )
   }
}
