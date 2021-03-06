import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { CoreComponent } from "./core/core.component";
import { MainComponent } from "./main/main.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NearbyHospialsComponent } from "./nearby-hospials/nearby-hospials.component";
import { StmpDiagComponent } from "./v-doc/stmp-diag/stmp-diag.component";
import { BdyDiagComponent } from "./v-doc/bdy-diag/bdy-diag.component";
import { ReportComponent } from "./v-doc/report/report.component";
import { DiagComponent } from "./v-doc/diag/diag.component";
import { AuthGuardService } from "./auth-guard.service";
import { ReportsComponent } from "./reports/reports.component";
import { SingleReportComponent } from "./reports/single-report/single-report.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/core/login', pathMatch: 'full'},
  {path: 'core', component: CoreComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'map', component: NearbyHospialsComponent}
  ]},
  {path: 'app', canActivate: [AuthGuardService], component: MainComponent, children: [
    {path: 'home', component: ProfileComponent},
    {path: 'map', component: NearbyHospialsComponent},
    {path: 'diag', component: DiagComponent, children: [
      {path: 'symp-diag', component: StmpDiagComponent},
      {path: 'bdy-diag', component: BdyDiagComponent},
      {path: 'report', component: ReportComponent}
    ]},
    {path: 'reports', component: ReportsComponent, children: [
      {path: ':id', component: SingleReportComponent}
    ]}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
