import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TokenService } from './services/token.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'/*, canActivate: [TokenService]*/},
  { path: '*', redirectTo: ''},
  { path: 'admin', loadChildren: './administracion/admin/admin.module#AdminPageModule' },
  { path: 'admin-tab1', loadChildren: './administracion/admin-tab1/admin-tab1.module#AdminTab1PageModule' },
  { path: 'admin-tab2', loadChildren: './administracion/admin-tab2/admin-tab2.module#AdminTab2PageModule' },
  { path: 'admin-tab3', loadChildren: './administracion/admin-tab3/admin-tab3.module#AdminTab3PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
