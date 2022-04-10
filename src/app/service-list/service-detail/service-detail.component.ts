import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../product.model';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
})
export class ServiceDetailComponent implements OnInit {
 @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(){
    
  }

}
