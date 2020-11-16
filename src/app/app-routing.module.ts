import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent} from './components/request-access/request-access.component';
import {SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestAccessCopyComponent} from './components/request-access-copy/request-access-copy.component';
import { Angular6homeComponent} from './components/angular6home/angular6home.component';
import {NgbModule,NgbModal,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent} from './components/userprofile/userprofile.component'

 const routes: Routes = [
  { path: 'RequestAcees', component: RequestAccessComponent  },
  { path:'Home', component:Angular6homeComponent},
  // { path: '', redirectTo: 'RequestAcees', pathMatch: 'full' },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Signup', component:SignUpComponent},
  { path:'AccessCopy', component:RequestAccessCopyComponent},
  { path:'UserProfile', component:UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
