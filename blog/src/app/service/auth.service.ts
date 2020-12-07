import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin) {
    return this.http.post('http://localhost:9000/users/login', userLogin)
  }

  register(user: User) {
    return this.http.post('http://localhost:9000/users/register', user)
  }

  btnLogout() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }
    return ok

  }

  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
    return ok
  }

}
