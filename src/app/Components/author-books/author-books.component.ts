import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from 'Entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css']
})
export class AuthorBooksComponent implements OnInit {
  email:string;
  book:Book=new Book();
  books:Book[]=[];

  constructor(public bookService:BookService,
    public router:Router,
    public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.email=this.route.snapshot.params['email']
   this.bookService.retrieveAllByEmail(this.email).subscribe((response)=>{
    console.log(response);
    this.books=response as Book[];
   })
    
  }

    getByEmail(email:string){
      const promise=this.bookService.retrieveAllByEmail(email);
      promise.subscribe((response)=>{
        console.log(response);
        this.books=response as Book[];
      })

    }

    editBook(id:number){

      console.log()
this.router.navigate(['updateBook',id])

    }
    
    deleteBook(id:number){
      const promise=this.bookService.deleteBook(id);
      promise.subscribe((response)=>{
        console.log(response);
        this.getByEmail(this.book.email);
        alert("Deleted Succesfully")
      },error=> console.error(error)
      );

    }


    
   

  }

 


