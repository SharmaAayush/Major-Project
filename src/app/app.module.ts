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
import { GeneralDataService } from './general-data.service';
import { ReportComponent } from './v-doc/report/report.component';
import { ReportServiceService } from './report-service.service';
import { DiagComponent } from './v-doc/diag/diag.component';
import { AuthGuardService } from './auth-guard.service';
import { ReportsComponent } from './reports/reports.component';
import { ReportsService } from './reports.service';
import { SingleReportComponent } from './reports/single-report/single-report.component';
import { ChartModule } from 'angular2-chartjs';

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
    BdyDiagComponent,
    ReportComponent,
    DiagComponent,
    ReportsComponent,
    SingleReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [
    ApiService,
    Config,
    AuthenticateUserService,
    GeneralDataService,
    ReportServiceService,
    AuthGuardService,
    ReportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
