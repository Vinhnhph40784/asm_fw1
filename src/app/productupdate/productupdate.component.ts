import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrl: './productupdate.component.css'
})
export class ProductupdateComponent {
  constructor(private productservice: ProductService, private route:ActivatedRoute){}
  productform = new FormGroup({
   name: new FormControl(),
   year: new FormControl(),
   tacgia: new FormControl(),
   price: new FormControl(),
  })
  router = new Router();
  productid = this.route.snapshot.params['id']
  ngOnInit(){
    
    this.productservice.GetProductById(this.productid).subscribe(
      data=> {
this.productform.controls.name.setValue(data.name)
this.productform.controls.year.setValue(data.year)
this.productform.controls.price.setValue(data.price)
this.productform.controls.tacgia.setValue(data.tacgia)
      },
      err=>{
        console.log(err)
      }
    )
  }
  onAddProduct = ()=> {
   this.productservice.UpdateProduct(this.productform.value as IProduct,this.productid).subscribe(
     data=>{
       alert('cap nhat thanh cong');
       this.router.navigate(['book']);
     },
     err=> {
       console.log(err)
     }
   )
  }
}
