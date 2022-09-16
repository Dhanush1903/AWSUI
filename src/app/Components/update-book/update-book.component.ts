import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from 'Entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id:number;

  book:Book = new Book();
  books:Book[]=[];
  constructor(public bookService:BookService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id=this.route.snapshot.params['id'];
  }

  updatemethod() {
    const observable= this.bookService.updateBook(this.id , this.book);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        alert("Updated Succesfully")
      },
      function(error){
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )


  }

}
