import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {TransationComponent} from './view/transation/transation.component';
import {LayoutComponent} from './layout/layout/layout.component';
import {HomeComponent} from './view/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'transaction',
        component: TransationComponent
      },
      {
        path : 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
