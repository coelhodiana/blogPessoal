import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../model/Topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  topic: Topic =  new Topic()
  listTopics!: Topic[];

  constructor(
    private topicService: TopicService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllTopics()
  }

  
  findAllTopics() {
    this.topicService.getAllTopics().subscribe((resp: Topic[])=>{
      this.listTopics = resp
    })
  }
  
  findByIdTopic() {
    this.topicService.getByIdTopic(this.topic.id).subscribe((resp: Topic) => {
      this.topic = resp;
    })
  }
  
  cadastrar() {
    if (this.topic.description == null) {
      alert('Preencha o campo de nome do tema corretamente.')
    } else {
      this.topicService.postTopic(this.topic).subscribe((resp: Topic) => {
        this.topic = resp;
        this.router.navigate(['/feed'])
        alert('Tema cadastrado com sucesso')
      })
    }
  }

}
