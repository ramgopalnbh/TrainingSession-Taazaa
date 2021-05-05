import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'apiconsumedemo';
  products :Product[] =[];
  productsubscription: Subscription;

  constructor(private appservice: AppService){
    this.productsubscription =new Subscription();
  }

  ngOnInit(){
    this.productsubscription =this.appservice.getProducts().subscribe(
      data=>{
        this.products =data
      },
      error=>{
        console.log(error)
      },
      ()=>console.log('Complete')
    )
  }

  ngOnDestroy(){
    if(this.productsubscription){
      this.productsubscription.unsubscribe();
    }
  }

  addTask(){
    let taskToadd={
      id :99,
      title:"Phone",
      price: 5000,
      quantity: 30,
      color: "Pink",
      expiryDate: "01-05-2021",
      inStock: true
    }
  }
}
