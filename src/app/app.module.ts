import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movieService/movie.service';
import { ErrorService } from './services/errorService/error.service';
import { UserService } from './services/userService/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RecentMoviesComponent } from './components/recent-movies/recent-movies.component';
// import { LoginComponent } from './components/login/login.component';
// import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
// import { PlaygroundComponent } from './playground/playground.component';
// import { PadreComponent } from './interaccionComponentes/padre/padre.component';
// import { HijoComponent } from './interaccionComponentes/hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    RecentMoviesComponent,
    // LoginComponent,
    // MovieDetailComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [MovieService, ErrorService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
