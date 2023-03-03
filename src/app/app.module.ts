import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewserviceService } from "./service/newservice.service";
import { EmpAddEditComponent } from './components/register form/login/emp-add-edit/emp-add-edit.component';
import { LoginComponent } from './components/register form/login/login.component';
import { ForgotPasswordComponent } from './components/register form/login/forgot-password/forgot-password.component';
import { NewsfeedComponent } from './components/feed/home/newsfeed.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { TrendingComponent } from './components/feed/trending/trending.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CommonFeedComponent } from './components/feed/common-feed.component';
import { TechComponent } from './components/feed/tech/tech.component';
import { BusinessComponent } from './components/feed/business/business.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NewsfeedComponent,
    TechComponent,
    BusinessComponent,
    TrendingComponent,
    CommonFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    MaterialModulesModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
