import { Routes } from '@angular/router';
import { CategoryItemComponent } from './category-item/category-item.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MyOrderComponent } from './my-order/screen/my-order.component';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { BoardGamesComponent } from './board-games/board-games.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainScreenComponent, children: [
        {
            path: 'Настільні_Ігри', component: BoardGamesComponent
        }
    ]},
    { path: 'my-order', component: MyOrderComponent },
    {
        path: 'home/:name', component: MenuGroupComponent, 
        children: [
            {
                path: ':name', component: CategoryItemComponent
            }
        ]
    }
];