import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'admin-tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../admin-tab1/admin-tab1.module').then(m => m.AdminTab1PageModule)
          }
        ]
      },
      {
        path: 'admin-tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../admin-tab2/admin-tab2.module').then(m => m.AdminTab2PageModule)
          }
        ]
      },
      {
        path: 'admin-tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../admin-tab3/admin-tab3.module').then(m => m.AdminTab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/administracion/admin/admin-tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/admin-tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsAdminRoutingModule {
}
