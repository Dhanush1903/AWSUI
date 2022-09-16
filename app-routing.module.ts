import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/Components/about-us/about-us.component';
import { AuthorBooksComponent } from 'src/app/Components/author-books/author-books.component';
import { BooksComponent } from 'src/app/Components/books/books.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { ReaderBookComponent } from 'src/app/Components/reader-book/reader-book.component';
import { SearchResultsComponent } from 'src/app/Components/search-results/search-results.component';
import { SignUpComponent } from 'src/app/Components/sign-up/sign-up.component';
import { UpdateBookComponent } from 'src/app/Components/update-book/update-book.component';




const routes: Routes = [{path:'book',component:BooksComponent},
{path:'about',component:AboutUsComponent},
{path:'',component:HomeComponent},
{path:'searchResults/:id',component:SearchResultsComponent},
{path:'login',component:LoginComponent},
{path:'authorBooks',component:AuthorBooksComponent},
{path:'updateBook/:id',component:UpdateBookComponent},
{path:'signUp',component:SignUpComponent},
{path:'readerBook/:id',component:ReaderBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
