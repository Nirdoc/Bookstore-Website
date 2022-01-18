import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private service:SharedService) { }

  AuthorList:any=[];

  ngOnInit(): void {
    this.refreshAuthorList()
  }

  refreshAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      console.log(data);
      this.AuthorList=data;
    });
  }

}
