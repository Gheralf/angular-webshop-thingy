import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './module/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './fakedatabase/in-memory-data.service';

import { AppComponent }  from './app.component';
import { ProductsSuggestedComponent } from './products-suggested.component';
import { ProductsAllComponent } from './products-all.component';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart.component';

import { ProductService } from './product.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ AppComponent, ProductsSuggestedComponent, ProductsAllComponent, ProductComponent, CartComponent ],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
