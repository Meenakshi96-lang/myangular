  import { Injectable } from '@angular/core';
  import { Observable, of } from 'rxjs';
  import { IProduct, Product } from '../models/product';
  //import { max } from 'rxjs/operators';
  //import { timingSafeEqual } from 'crypto';

  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    updateProduct(product: Product) {
      throw new Error("Method not implemented.");
    }

    private products:Array<Product>=[
      { id:1, name:'Orange Pickel', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:2, name:'Toamto Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:3, name:'Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:3, name:'Tomato curry', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:5, name:'Turmeric powder', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:6, name:'Eastern Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:7, name:'Eastern Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:8, name:'Eastern Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:9, name:'Eastern Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:10, name:'Eastern Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},
      { id:11, name:'Eastern Mango Pickle', code:'mp500', category: { name:'mango', code:'1', category:1}, unit:{name:'PCS', code:'1',category:0},purchaseRate:100, salesRate:110},

    ];
    id: string;
    constructor() { }
      getAllProducts():Observable<IProduct[]>{
        return of(this.products);
      }

      getProductById(id:number):Observable<IProduct>{
        var product = this.products.find(item => item.id === id);
        return of(product);
      }

      addNewProduct(product:IProduct):void{
        this.products.sort(item => item.id)
        product.id=this.products.length+1
        this.products.push(product);

      }
      deleteProduct(product:IProduct):IProduct[]{
        const index=this.products.findIndex(item => item.id ===product.id);
        const deletedItem=this.products.splice(index,1);
        return deletedItem;
      }
      UpdateProduct(product:IProduct):void{
        const index=this.products.findIndex(item => item.id=== product.id);
        this.products[index]=product;
      }
  }
