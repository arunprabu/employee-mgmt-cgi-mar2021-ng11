import { NgModule } from '@angular/core';
import { ProductsListingComponent } from './components/products-listing/products-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'products', component: ProductsListingComponent },
  { path: 'products/cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
