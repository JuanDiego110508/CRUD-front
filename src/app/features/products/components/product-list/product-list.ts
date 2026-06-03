import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent {

  constructor(
    public productService: ProductService
  ) {}

  get products(): Product[] {
    return this.productService.getProducts();
  }

  eliminarProducto(id: number): void {
    this.productService.deleteProduct(id);
  }

  editarProducto(product: Product): void {
    this.productService.selectProduct = { ...product };
  }
}
