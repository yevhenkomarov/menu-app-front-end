import { Routes } from '@angular/router';
import { CategoryItemComponent } from './category-item/category-item.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MyOrderComponent } from './my-order/screen/my-order.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MainScreenComponent},
    {path: 'my-order', component: MyOrderComponent},
    {path: 'home/category/:name', component:CategoryItemComponent }
];