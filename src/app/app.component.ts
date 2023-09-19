import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listItem = ['Iphone', 'Samsung', 'Oppo', 'Huaway'];
  typingText: string = '';
  product = {
    name: 'Iphone 15 ProMax',
    color: 'Natural Titanium',
    price: 1250,
    discount: 15.5,
  };
  GetDiscountPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
}
