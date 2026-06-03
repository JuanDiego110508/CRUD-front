import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() deleteProduct = new EventEmitter<number>();

  @Output() editProduct = new EventEmitter<Product>();

  eliminarProducto(): void {
    this.deleteProduct.emit(this.product.id);
  }

  editarProducto(): void {
    this.editProduct.emit(this.product);
  }
}
