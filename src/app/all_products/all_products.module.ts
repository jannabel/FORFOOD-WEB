import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { All_productsComponent } from './all_products.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
providers: [],
bootstrap: [All_productsComponent]
})
export class All_productsModule { }
