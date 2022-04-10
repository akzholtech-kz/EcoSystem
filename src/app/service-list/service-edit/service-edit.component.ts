import { Component, OnInit } from '@angular/core';
import { Product } from './../../product.model';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  this.products = this.productService.getProducts()
  }

}
