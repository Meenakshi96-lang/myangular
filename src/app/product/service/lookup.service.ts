import { Injectable } from '@angular/core';
import { Lookup } from '../models/lookup';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private units: Array<Lookup>=[
    {name:'PCS',code:"1",category:1},
    {name:'carton',code:"2",category:1},
    {name:'ml',code:"3",category:1},
    {name:'gram',code:"3",category:1}
  ];
    private productCategories: Array<Lookup>=[
      {name:'Pickles',code:"1",category:1},
      {name:'Rice',code:"2",category:1},
      {name:'oil',code:"3",category:1},
      {name:'masala',code:"3",category:1}
    ]
  constructor() { }
  
    getProductCategories(): Observable<Lookup[]>{
      return of(this.productCategories);
    }
    
    getUnits(): Observable<Lookup[]>{
      return of(this.units);

    }
  }
