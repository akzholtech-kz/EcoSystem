import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product, Reqest, WaitList } from './../../../product.model';
import { ProductService } from './../../../product.service';
import { DataService } from './../../../shared/data-storage.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit, OnDestroy {
  product: Product;
  editMode = false;
  disableMode = false;
  date: string;
  @Input() val: number;
  constructor( private proService: ProductService,
              private dataSer: DataService) { }

  ngOnInit() {
    this.date = this.proService.getDate()
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const setVal = new Reqest(value.email, value.name, value.amount, value.address, value.tel, this.product);
    this.dataSer.setNewValue(setVal)
    for(let i of this.proService.getProducts()){
      if(value.name === i.name){
        this.product = i;
        this.product.amount = value.amount;
        this.proService.formItem.next(this.product)

      }
    }
    form.reset();
    this.editMode = true;
    if(value.email){
      this.disableMode = true;
      console.log('has value')
    }else{
      console.log('not value')
    }
  }

  onSave() {
    this.dataSer.saveData()
    this.editMode = false;
    this.proService.dateSub.next(this.date);
    const newValue = new WaitList('Новый', 2, this.date, this.val)
    this.proService.setList(newValue)
    // this.dataSer.onReset(0)
  }

  ngOnDestroy(): void {

  }

}
