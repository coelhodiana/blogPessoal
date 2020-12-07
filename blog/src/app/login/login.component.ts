import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin

  constructor(
    /* Injeção das dependências */
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.userLogin).subscribe((resp: any = UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token) /* Insere o token em localStorage para dar acesso a página de feed */
      this.router.navigate(['/feed'])
    })
  }

}
