import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { appRoutes } from 'src/app/routes';
import { ConcreteItemComponent } from './concrete-item/concrete-item.component';
import { ProductsStorage } from './data/productsStorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MyOrderComponent } from './my-order/screen/my-order.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    MainScreenComponent,
    CategoryItemComponent,
    ConcreteItemComponent,
    MyOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [ProductsStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
