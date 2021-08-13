import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent implements OnInit {

  @Input() quantity?: number;
  constructor() { }

  ngOnInit(): void {
    
  }

}
