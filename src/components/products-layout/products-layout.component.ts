import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent implements OnInit {

  private products: any[];
  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Microsoft Office Skype v7.30.66.105',
        scenarios: 3,
        vendor: 'Microsoft',
        created: '01.01.2017',
        version: '1.0.0.3',
        modified: '03.01.2017'
      },
      {
        id: 2,
        name: 'Microsoft Office Enterprise E3',
        scenarios: 3,
        vendor: 'Microsoft',
        created: '01.01.2017',
        version: '1.0.0.3',
        modified: '03.01.2017'
      },
      {
        id: 3,
        name: 'Microsoft Iron Gold Bundle',
        scenarios: 3,
        vendor: 'Microsoft',
        created: '01.01.2017',
        version: '1.0.0.3',
        modified: '03.01.2017'
      }
    ]
  }

  remove(id: number): void {
    this.products.forEach( (product, idx) => {

      if (product.id === id) {
        this.products.splice(idx, 1);
        return;
      }

    });
  }

  public getProducts(): any[] {
    return this.products;
  }
}
