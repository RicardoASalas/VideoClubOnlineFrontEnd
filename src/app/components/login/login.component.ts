import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/userService/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('username',{read: ElementRef,static:false})
  username;
  user:User = {
    username:"",
    password:"",
    email:""
  }
  constructor(private userService:UserService,private router:Router) { }

  ngAfterViewInit(){
    console.log('After View Init ')
    setTimeout(() => { 
      console.log(this.username)
      this.username.nativeElement.focus()
     }, 0);
  }
  login(form){
    
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    
    console.log(this.user)
    
      this.userService.login(this.user)
        .subscribe(res=>{
          localStorage.setItem('Authorization', JSON.stringify(res))
          var guardado = localStorage.getItem('Authorization');
          this.router.navigate(['profile']);
          console.log('objetoObtenido: ', JSON.parse(guardado));
        })
  }
}
