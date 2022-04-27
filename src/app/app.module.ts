import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { About_usComponent } from './about_us/about_us.component';
import { C_productsComponent } from './c_products/c_products.component';
import { MenuComponent } from './shared/components/menu/menu.component';

@NgModule({
  declarations: [				
    AppComponent,
      AdminComponent,
      About_usComponent,
      C_productsComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
