import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './features/products/products.module';

import { App } from './app';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, ProductsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
