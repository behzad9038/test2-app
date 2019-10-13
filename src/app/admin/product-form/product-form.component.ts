import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { NgForm } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

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
  productID;
  mode='new';
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllCategory();
    this.activatedRoute.params.subscribe((x: Params) => {
      this.productID = x['id'];
      this.mode='edit';
      this.getProductByID(this.productID);
    });
  }
  getProductByID(ID) {
    this.productService.getProductByID(ID).subscribe((response: any) => {
      console.log(response);
      this.title = response.ProductName;
      this.price = response.Price;
      this.imgURL = response.ImageURL;
      this.category = response.Category;
    });
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
      this.router.navigateByUrl('/admin/products');
    },
      (err => {
        console.log(err);
      }));
  }
  delete()
  {
    this.productService.DeleteProduct(this.productID).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/admin/products');
    },
    (err => {
      console.log(err);
    }))
  }
}
