import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class EcommerceService {

    // private baseUrl1 = environment.baseUrl1;
    // private baseUrl2 = environment.baseUrl2;
    private productsUrl = "/productapi1/product";
    private productsUrl2 = "/productapi2/product";
    private ordersUrl = "/api/orders";

    // private productOrder: ProductOrder;
    // private orders: ProductOrders = new ProductOrders();

    // private productOrderSubject = new Subject();
    // private ordersSubject = new Subject();
    // private totalSubject = new Subject();

    // private total: number;

    // ProductOrderChanged = this.productOrderSubject.asObservable();
    // OrdersChanged = this.ordersSubject.asObservable();
    // TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getAllProducts1() {
        
        return this.http.get(this.productsUrl);
    }

    getAllProducts2() {
        
        return this.http.get(this.productsUrl2);
    }

}