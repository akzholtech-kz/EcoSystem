import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product, Reqest } from './../../../product.model';
import { ProductService } from './../../../product.service';
import { DataService } from './../../../shared/data-storage.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit, OnDestroy {
  product: Product;
  subscription: Subscription;
  constructor( private proService: ProductService,
              private dataSer: DataService) { }

  ngOnInit() {
   this.subscription = this.proService.startingEdit.subscribe(

   )
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const setVal = new Reqest(value.email, value.name, value.amount);
    this.dataSer.setNewValue(setVal)
    for(let i of this.proService.getProducts()){
      if(value.name === i.name){
        this.product = i;
        // console.log(this.product)
        this.proService.selectItem.next(this.product)

      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
