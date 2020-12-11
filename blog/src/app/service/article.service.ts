import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllArticles() : Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:9000/articles', this.token)
  }

  postArticle(article: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:9000/articles', article, this.token)
  }

}
