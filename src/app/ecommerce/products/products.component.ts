import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { EcommerceService } from '../services/EcommerceService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  products1: Product[] = [];
  products2: Product[] = [];

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit(): void {
    this.loadProducts1();
    this.loadProducts2();
  }

  loadProducts1() {
    this.ecommerceService.getAllProducts1()
        .subscribe(
            (products: any[]) => {
                this.products1 = products;
                this.products = this.products.concat(this.products1);
                // this.products.forEach(product => {
                //     this.productOrders.push(new ProductOrder(product, 0));
                // })
            },
            (error) => console.log(error)
        );
}

loadProducts2() {
  this.ecommerceService.getAllProducts2()
      .subscribe(
          (products: any[]) => {
              this.products2 = products;
              this.products = this.products.concat(this.products2)
              // this.products.forEach(product => {
              //     this.productOrders.push(new ProductOrder(product, 0));
              // })
          },
          (error) => console.log(error)
      );
}

}
