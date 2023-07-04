import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
{ path: 'links', loadChildren: () => import('./modules/links/links.module').then(m => m.LinksModule) },
{ path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
