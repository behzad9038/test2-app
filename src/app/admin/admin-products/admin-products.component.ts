import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  Products;
  displayedColumns: string[] = ['ProductName', 'Price', 'Edit'];
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }
  routeNewProduct() {
    this.router.navigateByUrl('/admin/products/new');
  }
  getAllProduct() {
    this.productService.getAllProduct().subscribe((response) => {
      this.Products = response
    });
  }
}
