import { Routes } from '@angular/router';
import { ProductsGrid } from './page/products-grid/products-grid';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "products/all" },

    { path: 'products/:category', loadComponent: () => import('./page/products-grid/products-grid').then((c) => c.ProductsGrid) },

    { path: 'wishlist', loadComponent: () => import('./page/my-wishlist/my-wishlist').then((c) => c.MyWishlist) }
];
