import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styles: [
  ]
})
export class ProductsListingComponent implements OnInit {

  productList: any[] = [];

  constructor(private productService: ProductService, private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }

  handleAddToCart(product: any): void{
    console.log(product);
    this.cartDataService.updateCart(product);
  }

}
