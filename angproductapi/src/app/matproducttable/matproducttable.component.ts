import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-matproducttable',
  templateUrl: './matproducttable.component.html',
  styleUrls: ['./matproducttable.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MatproducttableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['Id', 'Title', 'Price', 'Quantity' ,'Color','ExpiryDate', 'InStock', 'Update', 'Delete'];
  products : Product[] = [];         
  @Input() items$ : Observable<any>;    
  productsubscription : Subscription;
  constructor(private appservice: AppService, private cd: ChangeDetectorRef) { 
    this.productsubscription = new Subscription();
    this.items$ = new Observable<Product[]>();
  }
 
  ngOnInit(): void {
    this.productsubscription = this.items$.subscribe(
      data=>{
        this.products = data
        this.cd.markForCheck();
      },
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
    )
  }
 
  ngOnDestroy() {
    if(this.productsubscription)
    {
      this.productsubscription.unsubscribe();
    }
  }
 
 // dataSource = this.products;
}