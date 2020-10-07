import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent} from './components/request-access/request-access.component';
import {SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestAccessCopyComponent} from './components/request-access-copy/request-access-copy.component'
 const routes: Routes = [
  { path: 'RequestAcees', component: RequestAccessComponent  },
  { path: '', redirectTo: 'RequestAcees', pathMatch: 'full' },
  { path: 'Signup', component:SignUpComponent},
  { path:'AccessCopy', component:RequestAccessCopyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
