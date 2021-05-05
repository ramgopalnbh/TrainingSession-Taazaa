import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-listwithasync',
  templateUrl: './listwithasync.component.html',
  styleUrls: ['./listwithasync.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListwithasyncComponent implements OnInit {

  @Input() items$: Observable<Product[]>;
  constructor() {
    this.items$ =new Observable<Product[]>();
   }

  ngOnInit(): void {
  }

}
