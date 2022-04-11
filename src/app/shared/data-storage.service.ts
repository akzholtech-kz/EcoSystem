import { Reqest } from './../product.model';

export class DataService{

 private setProduct: Reqest[]= [];

 setNewValue(product: Reqest): any {
   this.setProduct.push(product);
 }

 
}