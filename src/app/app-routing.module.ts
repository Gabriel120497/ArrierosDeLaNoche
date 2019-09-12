import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TokenService } from './services/token.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'/*, canActivate: [TokenService]*/},
  { path: '*', redirectTo: ''},
  { path: 'admin', loadChildren: './administracion/admin/admin.module#AdminPageModule'},
  { path: 'arriero', loadChildren: './arriero/arriero/arriero.module#ArrieroPageModule' },
  { path: 'listado-usuarios', loadChildren: './administracion/listado-usuarios/listado-usuarios.module#ListadoUsuariosPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
