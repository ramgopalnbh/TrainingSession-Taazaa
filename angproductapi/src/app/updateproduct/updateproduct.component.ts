import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product'

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  products$: Observable<Product[]>;
  selectidControl: FormControl = new FormControl(0);
  showProductDetails: boolean = false;
  updateform: FormGroup;

  constructor(private fb: FormBuilder, private myservice: AppService, private router:Router) {
    this.products$ = new Observable<Product[]>();

    this.updateform = this.fb.group({
      title: ['', Validators.required],
      price: [ ,[Validators.required, Validators.min(0)]],
      quantity: [ ,[Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      expirydate: ['', Validators.required],
      instock: [true, Validators.required]
    });
  }

  ngOnInit(): void {
    this.products$ = this.myservice.getProducts();
  }
  showDetails() {
    if (this.selectidControl.value != "0") {
      this.showProductDetails = true;
      this.myservice.getProduct(this.selectidControl.value).subscribe(
        data => {
          this.updateform.get('title')?.setValue(data.title);
          this.updateform.get('price')?.setValue(data.price);
          this.updateform.get('quantity')?.setValue(data.quantity);
          this.updateform.get('color')?.setValue(data.color);
          this.updateform.get('expirydate')?.setValue(data.expiryDate);
          this.updateform.get('instock')?.setValue(data.inStock);
        }
      );
    }
  }

  update(){
    let product:Product = {...this.updateform.value};
    product.id = Number(this.selectidControl.value);
    this.myservice.putProduct(product).subscribe();
    this.router.navigate(['/home']);
  }

}
