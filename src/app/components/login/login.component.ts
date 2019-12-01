import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('username', { read: ElementRef, static: false })
  username;
  user: User = {
    username: "",
    password: "",
    email: ""
  }
  response: any;
  isToken: any;
  constructor(private userService: UserService, private router: Router) { }

  ngAfterViewInit() {
    console.log('After View Init ')
    setTimeout(() => {
      console.log(this.username)
      this.username.nativeElement.focus()
    }, 0);
  }
  login(form) {

    this.user.username = form.value.username;
    this.user.password = form.value.password;

    console.log(this.user)

    this.userService.login(this.user)
      .subscribe(res => {
        this.isToken = JSON.stringify(res)
        this.response = res;
        //Comprueba que la respuesta del back sea un token, en caso contrario manda un mensaje de alerta
        if (this.response.mensaje) {

          alert(this.response.mensaje)

        } else {
          // Si es un token la almacena en el local storage y redirige al perfil de usuario
          localStorage.setItem('Authorization', JSON.stringify(res))
          this.router.navigate(['profile']);

        }
      })
  }
}
