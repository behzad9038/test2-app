import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatTableDataSource } from '@angular/material';
import { Subscription, Subject } from 'rxjs';
export interface Product {
  ID: number;
  ProductName: string;
  Price: number;
  Category: string;
  ImageURL: string;
}
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  Products: MatTableDataSource<Product>;
  subscribtion: Subscription;
  displayedColumns: string[] = ['ProductName', 'Price', 'Edit'];
  dtOptions: DataTables.Settings = {};
  dtProducts;
  dtTrigger = new Subject();
  constructor(private router: Router, private productService: ProductService) {
    
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.getAllProduct();
  }
  routeNewProduct() {
    this.router.navigateByUrl('/admin/products/new');
  }
  getAllProduct() {
    this.subscribtion = this.productService.getAllProduct().subscribe((response: any[]) => {
      this.dtProducts=response;
      this.dtTrigger.next();
      this.Products = new MatTableDataSource(response);
      this.Products.filterPredicate =
        (data: Product, filter: string) =>
          !filter || data.ProductName.includes(filter) ||
          data.Price.toString().includes(filter);//define custome filter (this line could be delete to find all object on Products datasourde)
    });
  }
  applyFilter(filterValue: string) {
    this.Products.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
    this.dtTrigger.unsubscribe();
  }
}
