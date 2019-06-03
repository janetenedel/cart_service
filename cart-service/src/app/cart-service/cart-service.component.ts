import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';

interface CartItems {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

interface ApiData {
  data: CartItems[];
}

@Component({
    selector: 'app-cart-service',
    templateUrl: './cart-service.component.html',
    styleUrls: ['./cart-service.component.css'],
    providers: [ApiService]
  })



  export class CartServiceComponent implements OnInit {
  title = 'cart-items';
  list: CartItems[];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getAllItems().subscribe((data:ApiData) => {
      this.list = data.data;
  });
  
  }

}

