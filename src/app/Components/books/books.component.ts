import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Book from 'Entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book:Book=new Book();
  books:Book[]=[];
 
  save(){
    const observable= this.bookService.createBook(this.book);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        alert("Saved Succesfully")
      },
      function(error){
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
      
  
  }
 

  constructor(public bookService:BookService,
    public router:Router) { }

  ngOnInit(): void {
    const promise=this.bookService.getBooks();
    promise.subscribe((response)=>{
      console.log(response);
      this.books=response as Book[];
    })
    
  }

  

}
