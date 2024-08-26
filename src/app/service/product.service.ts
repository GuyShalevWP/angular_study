import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Productmodel';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseurl = 'http://localhost:3000/product';

    constructor(private http: HttpClient) { }

    GetAll() {
        return this.http.get<Product[]>(this.baseurl);
    }

    GetProductById(id:number) {
        return this.http.get<Product>(this.baseurl+'/'+id);
    }

    CreateProduct(_data:Product) {
        return this.http.post<Product>(this.baseurl, _data);
    }

    UpdateProduct(_data:Product) {
        return this.http.post<Product>(this.baseurl+'/'+_data.id, _data);
    }

    RemoveProduct(id:number) {
        return this.http.delete<Product>(this.baseurl+'/'+id);
    }
}

