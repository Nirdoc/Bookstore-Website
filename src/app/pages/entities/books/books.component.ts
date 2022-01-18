import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private service:SharedService) { }

  BookList:any=[];

  ngOnInit(): void {
    this.refreshBookList()
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      console.log(data);
      this.BookList=data;
    });
  }

}
