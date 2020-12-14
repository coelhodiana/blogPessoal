import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteArtigoComponent } from './delete-artigo/delete-artigo.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutArtigoComponent } from './put-artigo/put-artigo.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'post-tema', component: PostTemaComponent},
  {path: 'editar-artigo/:id', component: PutArtigoComponent},
  {path: 'delete-artigo/:id', component: DeleteArtigoComponent},
  {path: 'editar-tema/:id', component: PutTemaComponent},
  {path: 'delete-artigo/:id', component: DeleteTemaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
