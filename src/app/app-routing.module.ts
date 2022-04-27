import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About_usComponent } from './about_us/about_us.component';
import { AdminComponent } from './admin/admin.component';
import { C_productsComponent } from './c_products/c_products.component';

const routes: Routes = [
  {
    path: 'productos',
    component: C_productsComponent,
  },
  {
    path: 'administrador',
    component: AdminComponent
  },
  {
    path: 'sobre_nosotros',
    component: About_usComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
