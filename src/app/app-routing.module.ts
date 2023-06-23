import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Portfolio3dComponent } from './portfolio3d/portfolio3d.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio3D', component: Portfolio3dComponent },
  { path: 'github', component: GithubComponent },
  ],
  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
