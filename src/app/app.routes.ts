import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./components/catalog-list/catalog-list.component').then(
        (m) => m.CatalogListComponent
      ),
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./components/shopping-cart/shopping-cart.component').then(
        (m) => m.ShoppingCartComponent
      ),
  },

  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full',
  },
];
