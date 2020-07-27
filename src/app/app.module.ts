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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MyOrderComponent } from './my-order/screen/my-order.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { BoardGamesComponent } from './board-games/board-games.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    MainScreenComponent,
    CategoryItemComponent,
    ConcreteItemComponent,
    MyOrderComponent,
    MenuGroupComponent,
    BoardGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
