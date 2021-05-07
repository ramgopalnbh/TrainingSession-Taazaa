import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addform : FormGroup;
  constructor(private fb :FormBuilder, private myservice: AppService, private router: Router) {
    this.addform = this.fb.group({
      title: ['', Validators.required],
      price: ['',[Validators.required, Validators.min(0)]],
      quantity: ['',[Validators.required, Validators.min(0)]],
      color: ['',Validators.required],
      expirydate :['', Validators.required],
      instock : [true,Validators.required]
    });
   }
 
  ngOnInit(): void {
  }
 
  submit() {
    let product: Product ={...this.addform.value};
    product.id =0;
    console.log(product)
    this.myservice.addProduct(product).subscribe();
    //this.router.navigate(['/home'])
  }
}