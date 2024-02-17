import { animation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'App: Home'},
  { path: 'about', component: AboutComponent, title: 'App: About' },
  { path: 'portfolio', component: PortfolioComponent, title: 'App: Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'App: Contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:"enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
