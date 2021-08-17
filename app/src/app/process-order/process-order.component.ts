import { Component, OnInit } from '@angular/core';
import { CartHandlerService } from '../cart-handler.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  constructor(private cartHandler: CartHandlerService) { }
  total = 0;
  ngOnInit(): void {
    this.processOrder();
  }

  processOrder(): void {
    this.cartHandler.getTotal().subscribe(value => {
      this.total = value
      this.cartHandler.clearCart().subscribe();
    });
    
  }

}
