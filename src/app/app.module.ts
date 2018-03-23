import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ApiService } from './api.service';
import { Config } from './config';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticateUserService } from './authenticate-user.service';
import { CoreComponent } from './core/core.component';
import { MainComponent } from './main/main.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NearbyHospialsComponent } from './nearby-hospials/nearby-hospials.component';
import { StmpDiagComponent } from './v-doc/stmp-diag/stmp-diag.component';
import { BdyDiagComponent } from './v-doc/bdy-diag/bdy-diag.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ProfileComponent,
    CoreComponent,
    MainComponent,
    UserHeaderComponent,
    PageNotFoundComponent,
    NearbyHospialsComponent,
    StmpDiagComponent,
    BdyDiagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    Config,
    AuthenticateUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
