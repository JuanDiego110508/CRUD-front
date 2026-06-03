import { Component, DoCheck } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductFormComponent implements DoCheck {

  nombre: string = '';

  precio: number | null = null;

  editingProductId: number | null = null;

  constructor(
    private productService: ProductService
  ) {}

  ngDoCheck(): void {
    const selectedProduct = this.productService.selectProduct;

    if (selectedProduct && this.editingProductId !== selectedProduct.id) {
      this.nombre = selectedProduct.nombre;
      this.precio = selectedProduct.precio;
      this.editingProductId = selectedProduct.id;
    }
  }

  
  crearProducto(): void {
    if (!this.nombre.trim()) return;

    if (!this.precio || this.precio <= 0) return;

    const product: Product = {
      id: this.editingProductId ?? 0,
      nombre: this.nombre,
      precio: this.precio
    };

    if (this.editingProductId) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
    }

    this.limpiarFormulario();
  }

  limpiarFormulario(): void {
    this.nombre = '';
    this.precio = null;
    this.editingProductId = null;
    this.productService.selectProduct = null;
  }
}
