import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './../../product.model';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css'],
})
export class ServiceEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: Product[] = [];
  val: number = 0;
  amount: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.formItem.subscribe((respone) => {
      this.products.push(respone);
      this.val += respone.amount * respone.price;
      this.amount += respone.amount * 1
    });
  }

  onSum() {
   for(let i of this.products){
     this.val = i.amount * i.price;
   }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
