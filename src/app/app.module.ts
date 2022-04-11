import { DataService } from './shared/data-storage.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './partners/partners.component';
import { ProductService } from './product.service';
import { ServiceDetailComponent } from './service-list/service-detail/service-detail.component';
import { ServiceEditComponent } from './service-list/service-edit/service-edit.component';
import { ServiceFormComponent } from './service-list/service-edit/service-form/service-form.component';
import { ServiceWaitListComponent } from './service-list/service-edit/service-wait-list/service-wait-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceStartComponent } from './service-list/service-start/service-start.component';
import { ServiceItemComponent } from './service-list/service-table/service-item/service-item.component';
import { ServiceTableComponent } from './service-list/service-table/service-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ServiceListComponent,
    PartnersComponent,
    ContactsComponent,
    AboutComponent,
    ServiceDetailComponent,
    ServiceEditComponent,
    ServiceStartComponent,
    ServiceTableComponent,
    ServiceItemComponent,
    ServiceFormComponent,
    ServiceWaitListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ProductService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
