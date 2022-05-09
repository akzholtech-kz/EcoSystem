import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  selectedItem: Product;
  isAuthentication: boolean;
  constructor(private productSer: ProductService) { }

  ngOnInit(): void {
    this.productSer.selectItem.subscribe(
      (item: Product) =>{
        this.selectedItem = item;
      }
    )
    this.productSer.authentic.subscribe(
      (response: boolean)=>{
        this.isAuthentication = response;
      }
    )
  }

}
