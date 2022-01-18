import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {

  constructor(private service:SharedService) { }

  PublisherList:any=[];

  ngOnInit(): void {
    this.refreshPublisherList()
  }

  refreshPublisherList(){
    this.service.getPublisherList().subscribe(data=>{
      console.log(data);
      this.PublisherList=data;
    });
  }

}
