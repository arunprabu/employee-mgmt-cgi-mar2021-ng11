import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // let's have default cart items
  private currentCartItem: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // Step 1: Create BehaviousSubject with default value for subscribing
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItem);

  // Step 2: Create an Observable for the above BehaviourSubject
  // so that any comp can subscribe to it
  $latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() { }

  // Let's update the cart
  updateCart(product: any): void{
    console.log(product);

    this.$latestCartItems.pipe( take(1)).subscribe( (val: any) => {
      console.log(...val);
      const newArr = [ ...val, product];
      console.log(newArr);
      this.cartItemsList.next(newArr);
    });
  }
}
