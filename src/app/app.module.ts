import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './Components/books/books.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchResultsComponent } from './Components/search-results/search-results.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthorBooksComponent } from './Components/author-books/author-books.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ReaderBookComponent } from './Components/reader-book/reader-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
    SearchResultsComponent,
    LoginComponent,
    AuthorBooksComponent,
    UpdateBookComponent,
    SignUpComponent,
    ReaderBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
