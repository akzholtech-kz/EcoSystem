import { ProductService } from './../../product.service';
import { Product } from './../../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

}
