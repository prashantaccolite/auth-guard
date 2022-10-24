import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from './shared/constants/routing.constant';

const routes: Routes = [
  { 
    path: "", 
    redirectTo: ROUTING.ACCOUNT, 
    pathMatch: "full" 
  },
  {
    path: ROUTING.ACCOUNT, 
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) 
  },
  {
    path: ROUTING.VENDOR, 
    loadChildren: () => import('./modules/vendor/vendor.module').then(m => m.VendorModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
