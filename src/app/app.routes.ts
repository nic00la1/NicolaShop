import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import {CartComponent} from "./components/pages/cart/cart.component";

export const routes: Routes = [
    {path: '',  redirectTo:'products',pathMatch:'full'},
    {path:'products', component: HomeComponent},
    {path: 'cart', component: CartComponent},
];
