import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RegisterComponent } from './components/register/register.component';

// import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


const routes: Routes = [
  {path: "movie", redirectTo: "movie", pathMatch:"full"},
  {path:"movie", component:MovieListComponent},
  {path:"register",component:RegisterComponent},
  
  // {path:"movie/:id", component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
