import { ProductService } from './../../product.service';
import { Product } from './../../product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.css']
})
export class ServiceTableComponent implements OnInit {
 products: Product[];
  constructor( private productService: ProductService) { }

  ngOnInit() {
   this.products =  this.productService.getProducts()
  }
 

}
