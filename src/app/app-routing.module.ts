import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/feed/newsfeed/business/business.component';
import { NewsfeedComponent } from './components/feed/newsfeed/newsfeed.component';
import { TechComponent } from './components/feed/newsfeed/tech/tech.component';
import { TrendingComponent } from './components/feed/newsfeed/trending/trending.component';

const routes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'home', component: NewsfeedComponent },
  { path: 'technews', component: TechComponent },
  { path: 'businessnews', component: BusinessComponent },
  { path: 'trendingnews', component: TrendingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
