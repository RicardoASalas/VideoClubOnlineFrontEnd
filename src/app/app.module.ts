import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
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
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MostRatedListComponent } from './components/most-rated-list/most-rated-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    RecentMoviesComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MostRatedListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [
    MovieDetailsComponent
  ],

  providers: [MovieService, ErrorService, UserService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
