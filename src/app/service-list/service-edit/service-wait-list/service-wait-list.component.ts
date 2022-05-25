import { WaitList } from './../../../product.model';
import { ProductService } from './../../../product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-wait-list',
  templateUrl: './service-wait-list.component.html',
  styleUrls: ['./service-wait-list.component.css']
})
export class ServiceWaitListComponent implements OnInit {
 data: string;
 paid: string = 'Не оплачено'
 waitlist: WaitList[];
  constructor(private proSer: ProductService) { }

  ngOnInit(){
    this.waitlist = this.proSer.getList()
   this.proSer.dateSub.subscribe(
     response =>{
       this.data = response
     }
   )
   this.proSer.paid.subscribe(i=>
    this.paid = i)
   
  }
  

}
