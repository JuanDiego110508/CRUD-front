import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductFormComponent } from './components/product-form/product-form';
import { ProductCardComponent } from './components/product-card/product-card';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductPageComponent } from './pages/product-page/product-page';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductCardComponent, 
    ProductListComponent, 
    ProductPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductFormComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductPageComponent
  ]
})
export class ProductsModule {}
