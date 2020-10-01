import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { EcommerceService } from './ecommerce/services/EcommerceService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
