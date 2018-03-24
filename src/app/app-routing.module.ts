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

const appRoutes: Routes = [
  {path: '', redirectTo: '/core/login', pathMatch: 'full'},
  {path: 'core', component: CoreComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'map', component: NearbyHospialsComponent}
  ]},
  {path: 'app', component: MainComponent, children: [
    {path: 'home', component: ProfileComponent},
    {path: 'map', component: NearbyHospialsComponent},
    {path: 'symp-diag', component: StmpDiagComponent},
    {path: 'bdy-diag', component: BdyDiagComponent},
    {path: 'report', component: ReportComponent}
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
