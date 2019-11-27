import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/userService/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('username',{read: ElementRef,static:false})
  username;
  user:User = {
    username:"",
    password:"",
    email:""
  }
  constructor(private userService:UserService) { }

  ngAfterViewInit(){
    console.log('After View Init ')
    setTimeout(() => { 
      console.log(this.username)
      this.username.nativeElement.focus()
     }, 0);
  }
  registrar(form){
    
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    this.user.email = form.value.email;
    console.log(this.user)
    
      this.userService.register(this.user)
        .subscribe(res=>console.log(res))
  }
}
