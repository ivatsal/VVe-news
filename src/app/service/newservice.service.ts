import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-02-03&sortBy=publishedAt&apiKey=6ddf1e7e7abb42bb9e681e70c9936b3e";  //headline

  techApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6ddf1e7e7abb42bb9e681e70c9936b3e"; //tech

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ddf1e7e7abb42bb9e681e70c9936b3e"; // business

  trendingApiUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6ddf1e7e7abb42bb9e681e70c9936b3e";

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

  trendingNews(): Observable<any> {
    return this._http.get(this.trendingApiUrl);
  }
}
