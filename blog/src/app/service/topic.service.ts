import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../model/Topic';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllTopics() : Observable <Topic[]> {
    return this.http.get<Topic[]>('http://localhost:9000/topic', this.token)
  }

  getByIdTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(`http://localhost:9000/topic/${id}`, this.token)
  }

  getByNameTopic(name: string): Observable<Topic> {
    return this.http.get<Topic>(`http://localhost:9000/topic/name/${name}`, this.token)
  }

  postTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>('http://localhost:9000/topic', topic, this.token)
  }

  putTopic(topic: Topic): Observable<Topic> {
    return this.http.put<Topic>('http://localhost:9000/topic', topic, this.token)
  }


}
