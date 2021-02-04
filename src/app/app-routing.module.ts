import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestAccessCopyComponent} from './components/request-access-copy/request-access-copy.component';
import { Angular6homeComponent} from './components/angular6home/angular6home.component';
import {NgbModule,NgbModal,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent} from './components/userprofile/userprofile.component'
import { TestComponent} from './compoents/test/test.component'
import { AngulartaskComponent} from './app/component/angulartask/angulartask.component'
 const routes: Routes = [

  { path:'Angulartask', component:AngulartaskComponent},
  // { path: '', redirectTo: 'RequestAcees', pathMatch: 'full' },
  { path: '', redirectTo: 'Angulartask', pathMatch: 'full' },
  { path: 'Signup', component:SignUpComponent},
  { path:'AccessCopy', component:RequestAccessCopyComponent},
  { path:'UserProfile', component:UserprofileComponent},
  {path:'Testcomponent', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
