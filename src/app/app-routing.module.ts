import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RecentMoviesComponent } from './components/recent-movies/recent-movies.component';

// import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


const routes: Routes = [
  
  {path: "", redirectTo: "movie", pathMatch:"full"},
  {path:"movie", component:MovieListComponent},
  {path:"recentMovies", component:RecentMoviesComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"logout", component:LogoutComponent}
  
  // {path:"movie/:id", component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
