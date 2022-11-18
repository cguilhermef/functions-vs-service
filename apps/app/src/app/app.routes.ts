import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'lazy-home',
    loadChildren: () =>
      import('./pages/lazy-home/lazy-home-page.module').then(
        (m) => m.LazyHomePageModule
      ),
  },
  {
    path: 'another-lazy-home',
    loadChildren: () =>
      import('./pages/another-lazy-home/another-lazy-home-page.module').then(
        (m) => m.AnotherLazyHomePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
