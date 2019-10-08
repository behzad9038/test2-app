import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  title;
  price;
  imgURL;
  category;
  categiries: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllCategory();
    // this.category='fruits';
  }
  getAllCategory() {
    this.productService.getAllCategory().subscribe((response) => {
      this.categiries = response;
    })
  }
  submit(form: NgForm) {
    console.log(form);
    this.productService.modifyProduct(form.value).subscribe((response) => {
      console.log(response);
    },
      (err => {
        console.log(err);
      }));
  }
}
