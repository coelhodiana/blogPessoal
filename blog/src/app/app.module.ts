import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutArtigoComponent } from './put-artigo/put-artigo.component';
import { DeleteArtigoComponent } from './delete-artigo/delete-artigo.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    PerfilLateralComponent,
    LoginComponent,
    RegisterComponent,
    PostTemaComponent,
    PutArtigoComponent,
    DeleteArtigoComponent,
    DeleteTemaComponent,
    PutTemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
