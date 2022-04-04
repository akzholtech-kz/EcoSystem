import { Product } from './../../../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent {
  product: Product[];

  constructor() { }

}
