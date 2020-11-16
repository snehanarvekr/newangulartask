import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestAccessComponent } from './components/request-access/request-access.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import {NgbModule,NgbModal,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { RequestAccessCopyComponent } from './components/request-access-copy/request-access-copy.component';
import { Angular6homeComponent } from './components/angular6home/angular6home.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestAccessComponent,
    SignUpComponent,
    RequestAccessCopyComponent,
    Angular6homeComponent,
    UserprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,  // add  this
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
   
  ],
  // providers: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
