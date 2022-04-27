import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { About_usComponent } from './about_us/about_us.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { All_productsComponent } from './all_products/all_products.component';
import { CarouselComponent } from './all_products/components/carousel/carousel.component';
import { Products_cardComponent } from './all_products/components/products_card/products_card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './all_products/products.service';

@NgModule({
  declarations: [				
    AppComponent,
      AdminComponent,
      About_usComponent,
      All_productsComponent,
      MenuComponent,
      CarouselComponent,
      Products_cardComponent,
      FooterComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
