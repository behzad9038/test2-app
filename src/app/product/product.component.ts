import { Component, OnInit } from '@angular/core';
import { Product, Category } from '../model/model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Products: Product[];
  filteredProduct: Product[];
  Category: Category[];
  slectedCategory: string;
  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.slectedCategory = params['category'];

    

      this.productService.getAllProduct().subscribe((response: Product[]) => {
        this.Products = response;
        if (this.slectedCategory) {
          //alert(this.slectedCategory);
          this.filteredProduct = this.Products.filter(c => c.Category.toLowerCase() === this.slectedCategory.toLowerCase());
        }
        else {
          this.filteredProduct = this.Products;
        }
      });
      this.productService.getAllCategory().subscribe((response: Category[]) => {
        this.Category = response;
      });



    });
  }

  ngOnInit() {

  }

}
