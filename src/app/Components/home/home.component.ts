import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'Entity/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  book: Book = new Book();
  books: Book[] = [];
  category: string;

  constructor(public bookService: BookService,
    public router: Router) { }

  search() {
    //  this.refresh();
     this.router.navigate(['searchResults']
    //  , {
    //   queryParams: {
    //     'Category': this.book.category, 'AuthorName': this.book.authorName,
    //     'Price': this.book.price,
    //     'Publisher': this.book.publisher
    //   }
    //}
    )

  }

 

  refresh() {
    const promise = this.bookService.getBooks();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
    })
  }



  ngOnInit(): void {
const promise= this.bookService.getBooks();
promise.subscribe((res:any)=>{
  this.books=res as Book[];
})


  }
  

  searchBooks(category:string,authorName:string,price:number,publisher:string){
    const promise=this.bookService.searchBooks(authorName,category,price,publisher)    
    promise.subscribe((response)=>{
      console.log(response);
      this.books=response as Book[];
  })
  }
  addToCart(id:number){
    this.router.navigate(['searchResults',id])
  }


}
