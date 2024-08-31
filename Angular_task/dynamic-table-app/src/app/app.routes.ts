import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent}, 
    { path: 'products', component: ProductComponent},
];
