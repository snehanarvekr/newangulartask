import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import {NgbModule,NgbModal,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { RequestAccessCopyComponent } from './components/request-access-copy/request-access-copy.component';
import { Angular6homeComponent } from './components/angular6home/angular6home.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TestComponent } from './compoents/test/test.component';
import { AngulartaskComponent } from './app/component/angulartask/angulartask.component';


@NgModule({
  declarations: [
    AppComponent,
   
    SignUpComponent,
    RequestAccessCopyComponent,
    Angular6homeComponent,
    UserprofileComponent,
    TestComponent,
    AngulartaskComponent,
    
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
