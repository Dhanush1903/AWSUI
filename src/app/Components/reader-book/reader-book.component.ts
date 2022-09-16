import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from 'Entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-reader-book',
  templateUrl: './reader-book.component.html',
  styleUrls: ['./reader-book.component.css']
})
export class ReaderBookComponent implements OnInit {
  id:number;

  book:Book = new Book();
  books:Book[]=[];
  constructor(public bookService:BookService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id=this.route.snapshot.params['id'];
    this.getReaderBook(this.id);

  }
  getReaderBook(id:number){
    const promise=this.bookService.getReadersBook(id); 
    promise.subscribe((response)=>{
      console.log(response);
      this.book=response as Book;
    })

  }
  
}
