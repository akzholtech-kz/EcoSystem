import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reqest, Product } from './../product.model';
@Injectable()
export class DataService {
  private setProduct: Reqest[] = [];

  constructor(private http: HttpClient) {}

  setNewValue(product: Reqest): any {
    this.setProduct.push(product);
  }

  saveData() {
    this.http
      .put(
        'https://exosystem-11cdd-default-rtdb.asia-southeast1.firebasedatabase.app/request/request.json',
        this.setProduct
      )
      .subscribe((respone) => {
        console.log(respone);
      });
  }

  onReset(id : number){
    this.setProduct.splice(id)
  }
}
