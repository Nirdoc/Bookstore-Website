import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http:HttpClient) { }

    getAuthorList():Observable<any[]>{
        return this.http.get<any>(`${environment.baseUrl}/getAuthors`);
    }

    getPublisherList():Observable<any[]>{
      return this.http.get<any>(`${environment.baseUrl}/getPublishers`);
    }

    getBookList():Observable<any[]>{
        return this.http.get<any>(`${environment.baseUrl}/getBooks`);
  }
}
