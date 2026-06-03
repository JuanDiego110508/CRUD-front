import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  private currentId: number = 1;

  selectProduct: Product | null = null;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(product: Product): void {
    product.id = this.currentId++;
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
