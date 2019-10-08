import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
routeNewProduct(){
  this.router.navigateByUrl('/admin/products/new');
}
}
