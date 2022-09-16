import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from 'Entity/Book';
import Reader from 'Entity/Reader';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  id:number;
  book:Book=new Book();
  books:Book[]=[];
  category='';
  authorName='';
  price=0;
  publisher='';

  reader:Reader=new Reader();
  readers:Reader[]=[];


  constructor(public bookService:BookService,
    private activatedroute: ActivatedRoute,
    private router:Router) {
      
      
     }

  ngOnInit(): void { 
    this.reader = new Reader();
    this.id=this.activatedroute.snapshot.params['id'];
    
    
  //   const promise=this.bookService.getBooks();
  //   promise.subscribe((response)=>{
  //     console.log(response);
  //     this.books=response as Book[];
  // })

//  searchbyparams(){
//   const promise=this.bookService.getbyparams();
//   promise.subscribe((response)=>{
//         console.log(response);
//         this.books=response as Book[];
//     })}

}
buyBook(){
  const observable= this.bookService.buyBook(this.id,this.reader);    
  observable.subscribe(
    (response:any)=>{
      console.log(response);
      alert("Payment Completed")
      this.router.navigate(['readerBook',this.id])

    },
    function(error){
      console.log(error);
      alert("Something went wrong please try again!")
    }
  )
    

}



}
