import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ProductsSuggestedComponent } from '../products-suggested.component';
import { ProductsAllComponent } from '../products-all.component';
import { ProductComponent } from '../product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductsSuggestedComponent },
  { path: 'all',  component: ProductsAllComponent },
  { path: 'product/:id', component: ProductComponent }
  /* when URL = heroes then, show this component, <router-outlet> (in app.component) tells WHERE */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)] ,
  exports: [ RouterModule ] 
  /* exports allows companion modules to have access to Router declarables 
     such as RouterLink and RouterOutlet*/
})
export class AppRoutingModule {}