import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './partners/partners.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { AboutComponent } from './about/about.component';
import { ServiceDetailComponent } from './service-list/service-detail/service-detail.component';
import { ServiceEditComponent } from './service-list/service-edit/service-edit.component';
import { ServiceStartComponent } from './service-list/service-start/service-start.component';
import { ServiceTableComponent } from './service-list/service-table/service-table.component';
import { ServiceItemComponent } from './service-list/service-table/service-item/service-item.component';
import { ServiceFormComponent } from './service-list/service-edit/service-form/service-form.component';


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
    ServiceFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
