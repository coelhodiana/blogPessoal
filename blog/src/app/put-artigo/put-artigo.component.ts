import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../model/Article';
import { Topic } from '../model/Topic';
import { ArticleService } from '../service/article.service';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-put-artigo',
  templateUrl: './put-artigo.component.html',
  styleUrls: ['./put-artigo.component.css']
})
export class PutArtigoComponent implements OnInit {

  article: Article = new Article()

  topic: Topic = new Topic()
  listTopics!: Topic[]
  idTopic!: number

  constructor(
    private articleService: ArticleService,
    private topicService: TopicService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  findAllTopics() {
    this.topicService.getAllTopics().subscribe((resp: Topic[])=>{
      this.listTopics = resp
    })
  }

  findByIdTopic() {
    this.topicService.getByIdTopic(this.idTopic).subscribe((resp: Topic) => {
      this.topic = resp
    })
  }

  salvar() {

  }

}
