import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exosystem';
  isAuthentication: boolean;
  constructor(private proSer: ProductService){}

  ngOnInit(){
    this.proSer.authentic.subscribe(
      (response: boolean)=>{
        this.isAuthentication = response;
      }
    )
  }
}
