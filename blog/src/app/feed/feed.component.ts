import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Article } from '../model/Article';
import { Topic } from '../model/Topic';
import { ArticleService } from '../service/article.service';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'date'
  reverse = true

  article: Article = new Article()
  listArticles!: Article[]

  topic: Topic =  new Topic()
  listTopics!: Topic[];
  idTopic!: number
  nameTopic!: string

  constructor(
    private articleService: ArticleService,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.findAllArticles()
    this.findAllTopics()
  }

  findAllArticles() {
    this.articleService.getAllArticles().subscribe((resp: Article[]) => {
      this.listArticles = resp
    })
  }

  publish() {
    this.topic.id = this.idTopic
    this.article.topic = this.topic

    if(this.article.title == null || this.article.article ==null || this.article.topic ==null ) {
      alert('Preencha todos os campos antes de publicar.')
    } else {
      this.articleService.postArticle(this.article).subscribe((resp: Article) => {
        this.article = resp
        console.log(this.article)
        this.article = new Article()
        alert('Artigo Publicado com sucesso!')
        this.findAllArticles()
      })
    }
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

}
