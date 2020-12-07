import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User()
  password!: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  confirmPassword(event: any) {
    this.password = event.target.value
  }

  register() {
    if (this.password === this.user.password) {
      this.authService.register(this.user).subscribe((resp: any = User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso')
      })
    } else {
      alert('As senhas não conferem.')

    }
  }

}
