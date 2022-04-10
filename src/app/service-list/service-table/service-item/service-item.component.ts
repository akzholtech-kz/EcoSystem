import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../../product.model';
import { ProductService } from './../../../product.service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
@Input() product: Product;

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
  }
  onSelectItem() {
    this.productService.selectItem.next(this.product)
  }

}
