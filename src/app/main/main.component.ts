import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isAuth: boolean;

  constructor( private proSer: ProductService) { }

  ngOnInit(){
    this.proSer.authentic.subscribe(
      (res: boolean)=>{
        this.isAuth = res;
      }
    )
  }
  onSelect(id: string) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }

}
