import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrieroPage } from './arriero.page';

const routes: Routes = [
  {
    path: '',
    component: ArrieroPage,
    children: [
      {
        path: 'arriero-tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../arriero-tab1/arriero-tab1.module').then(m => m.ArrieroTab1PageModule)
          }
        ]
      },
      {
        path: 'arriero-tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../arriero-tab2/arriero-tab2.module').then(m => m.ArrieroTab2PageModule)
          }
        ]
      },
      {
        path: 'arriero-tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../arriero-tab3/arriero-tab3.module').then(m => m.ArrieroTab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/arriero/arriero/arriero-tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/arriero/arriero-tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsArrieroRoutingModule {}
