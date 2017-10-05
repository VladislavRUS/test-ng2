import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'components/header/header.component';
import { ProductsLayoutComponent } from 'components/products-layout/products-layout.component';
import { ProductPanelComponent } from 'components/product-panel/product-panel.component';
import { ProductPanelMenuComponent } from 'components/product-panel-menu/product-panel-menu.component';
import { MenuService } from 'components/menu.service';

const routes: Route[] = [
  { path: 'products', component: ProductsLayoutComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsLayoutComponent,
    ProductPanelComponent,
    ProductPanelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
