import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-listwithobservable',
  templateUrl: './listwithobservable.component.html',
  styleUrls: ['./listwithobservable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListwithobservableComponent implements OnInit {

  @Input() products: Observable<Product[]>;

  items:Product[] =[];
  productsubscription : Subscription;
  constructor(private cd: ChangeDetectorRef) {
    this.productsubscription =new Subscription();
    this.products =new Observable();
   }

  ngOnInit(): void {
      this.productsubscription =this.products.subscribe(
      data=>{
        this.items =data;
        console.log(data);
        this.cd.markForCheck();
      },
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
  )
  }
}
